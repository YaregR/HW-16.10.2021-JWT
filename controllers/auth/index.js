const jwt = require('jsonwebtoken');
const getPrivKey = require('./getPrivKey');
const getPubKey = require('./getPubKey');


const login = async (login, pwd) => {
    const user = { login: 'lalala', pwd: 123, id: 15 }; 
    if (user.login !== login || user.pwd !== pwd) {
        return { status: 'invalid auth' };
  }
    const token = await createAccesstoken({ id: user.id });
    return { status: 'ok', payload: { id: user.id, token } };
};

const checkAndDecode = async (token) => {
    const pubKey = await getPubKey();
    const result = await jwt.verify(token, pubKey, { algorithms: ['RS256'] });
    return result;
};

const createAccesstoken = async (payload) => {
    const privKey = await getPrivKey();

    const token = jwt.sign(
        payload, //payload
        privKey, 
        { algorithm: 'RS256' }, 
      );

    return token;  
};

module.exports = { 
  login,
  checkAndDecode
};
