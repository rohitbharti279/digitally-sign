const crypto = require('crypto');
const elliptic = require('elliptic');
const ec = new elliptic.ec('secp256k1');

// Step 1: Generate a private key
const privateKey = ec.genKeyPair();
console.log(privateKey);
