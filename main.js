const crypto = require('crypto');
const elliptic = require('elliptic');
const ec = new elliptic.ec('secp256k1');

// Step 1: Generate a private key
const privateKey = ec.genKeyPair();

// Step 2: Sign the message
const message = 'Hello, World';
const hash = crypto.createHash('sha256').update(message).digest('hex');
console.log(hash)
const signature = privateKey.sign(hash);

