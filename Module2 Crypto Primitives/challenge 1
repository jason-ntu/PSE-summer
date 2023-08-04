const crypto = require('crypto');

// Asymmetric encryption
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });

// Encrypt
const plaintext = 'This is a secret message.';
// TODO: Use the publicKey to encrypt the plaintext message. Remember that RSA encryption is public key encryption.
const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(plaintext));

// Decrypt
// TODO: Use the privateKey to decrypt the encrypted message. The result should be the original plaintext.
const decrypted = crypto.privateDecrypt(privateKey, encrypted);
console.log('Decrypted message:', decrypted.toString());

// Create a digital signature
const sign = crypto.createSign('SHA256');
sign.update(plaintext);
sign.end();
// TODO: Use the privateKey to sign the plaintext message. This will generate a digital signature.
const signature = sign.sign(privateKey, 'hex');

// Verify a digital signature
const verify = crypto.createVerify('SHA256');
verify.update(plaintext);
verify.end();
// TODO: Use the publicKey to verify the signature. It should return true if the signature is valid.
console.log(verify.verify(publicKey, signature, 'hex'));