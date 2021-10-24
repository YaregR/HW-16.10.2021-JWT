const fs = require('fs-extra');
const path = require('path');

let pubKey = null;

const getPubKey = async () => {
    if (!pubKey) {
        const keypath = path.join(__dirname, '../../keys/my_public.key');
        pubKey = await fs.readFile(keypath, 'utf-8');

    }

    return pubKey;
};

module.exports = getPubKey;