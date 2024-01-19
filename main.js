const crypto = require('crypto');
const elliptic = require('elliptic');
const ec = new elliptic.ec('secp256k1');

//Generate a private key
const privateKey = ec.genKeyPair();

//Sign the message
const message = 'Hello, World';
const hash = crypto.createHash('sha256').update(message).digest('hex');
const signature = privateKey.sign(hash);

//Verify the signature using the public key
const publicKey = privateKey.getPublic();
const isValid = ec.verify(hash, signature, publicKey);

console.log("Message:", message);
console.log("Hash:", hash);
console.log("Signature:", signature);
console.log("Is Signature Valid?", isValid);


