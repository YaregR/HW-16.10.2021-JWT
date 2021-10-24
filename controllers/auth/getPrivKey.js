const fs = require('fs-extra');
const path = require('path');

let privKey = null;

const getPrivateKey = async () => {
    if (!privKey) {
        const keypath = path.join(__dirname, '../../keys/my_private.key');
        privKey = await fs.readFile(keypath, 'utf-8');

    }

    return privKey;
};

module.exports = getPrivateKey;