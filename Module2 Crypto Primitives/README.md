# **💪 Exercises**

Reference: [Module 2 - Crypto Primitives](https://pse-team.notion.site/Module-2-Crypto-Primitives-Encryption-Hash-Functions-and-Beyond-9b617504208b47b7aec84ef1d52f22aa)

## **Written Questions**

1. **Symmetric vs. Asymmetric Encryption**: What are the key differences between symmetric and asymmetric encryption? Provide a practical use case for each.
2. **Public-Key Cryptography and Key Exchange Protocols**: How can the Diffie-Hellman protocol enhance security in a messaging application?
3. **Hash Functions**: What features make SHA-256 and Poseidon good hash functions for ensuring data integrity? Mention one unique advantage of Poseidon.
4. **Merkle Trees**: Explain how Merkle trees can help verify data in a large database efficiently.
5. **Cryptographic Commitments**: How can Pedersen Commitments be used in a blockchain protocol to maintain transaction privacy?
6. **Digital Signatures**: How can you verify the authenticity of a digitally signed document?

```
My Answer:

1. Symmetric encryption uses the same key to encrypt and decrypt data. Asymmetric encryption uses a public key to encrypt data and a private key to decrypt data. Symmetric encryption is faster than asymmetric encryption. Asymmetric encryption is more secure than symmetric encryption. Symmetric encryption is used to encrypt data in transit. Asymmetric encryption is used to encrypt data at rest.
2. The Diffie-Hellman protocol can be used to exchange a secret key between two parties. The secret key can then be used to encrypt and decrypt messages between the two parties. This ensures that only the two parties can read the messages.
3. SHA-256 and Poseidon are both resistant to preimage attacks and collisions. Since Poseidon is designed for ZKP, it has a relatively efficient arithmetic design.
4. Merkle trees can be used to verify data in a large database efficiently by using a hash tree. The root of the hash tree can be used to verify the integrity of the entire database. If the root hash is the same, then the database has not been tampered with.
5. Pedersen Commitments can be used in a blockchain protocol to maintain transaction privacy by hiding the amount of the transaction. The sender can commit to the amount of the transaction without revealing it. The receiver can verify the amount of the transaction without revealing it.
6. You can verify the authenticity of a digitally signed document by using the public key of the signer to verify the signature. If the signature is valid, then the document is authentic.
```

## **Programming Challenges**


In these challenges, you’ll implement cryptographic methods in a Node.js environment. You will need the following packages, which you can install using NPM:

```bash
npm install merkletreejs poseidon-encryption ffjavascript
```

### **Challenge 1: Asymmetric Encryption and Digital Signature**

In this challenge, you will use the `crypto` built-in library in Node.js to implement asymmetric encryption. Your task is to encrypt and decrypt some sample text, generate a digital signature for the encrypted message, and then verify it. This simulates a secure message exchange where you want to ensure the confidentiality and authenticity of the messages.

```jsx
const crypto = require('crypto');

// Asymmetric encryption
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });

// Encrypt
const plaintext = 'This is a secret message.';
// TODO: Use the publicKey to encrypt the plaintext message. Remember that RSA encryption is public key encryption.

// Decrypt
// TODO: Use the privateKey to decrypt the encrypted message. The result should be the original plaintext.

// Create a digital signature
const sign = crypto.createSign('SHA256');
sign.update(plaintext);
sign.end();
// TODO: Use the privateKey to sign the plaintext message. This will generate a digital signature.

// Verify a digital signature
const verify = crypto.createVerify('SHA256');
verify.update(plaintext);
verify.end();
// TODO: Use the publicKey to verify the signature. It should return true if the signature is valid.
```

Tip: The `crypto` library has specific functions for encryption, decryption, signing, and verifying. Look up the library documentation for examples and usage [here](https://nodejs.org/api/crypto.html).

### **Challenge 2: Hashing with SHA-256 and Poseidon**

For this challenge, your task is to compute the SHA-256 and Poseidon hashes of some input data. You will then observe how the hash value changes drastically even with a small change in the input data. This is an important property of cryptographic hash functions called [“avalanche effect”](https://en.wikipedia.org/wiki/Avalanche_effect).

```jsx
const crypto = require("crypto");
const poseidon = require("poseidon-encryption");

// SHA-256
const data = "This is some data X.";
// TODO: Compute the SHA-256 hash of the data and print it. Try changing the data slightly and observe the changes in the hash.

// Poseidon
const inputs = [1, 2, 3, 4];
// TODO: Compute the Poseidon hash of the inputs and print it. Remember that Poseidon accepts an array of integers as input.
```

Tip: Use the `.digest('hex')` method of the `hash` object to print the hash in a human-readable format. As for the `poseidon-encryption` package, there lacks good documentation but have a look at the source code [here](https://github.com/weijiekoh/circomlib/tree/feat/poseidon-encryption) for some hints (pay special attention to the tests for example usage).

### **Challenge 3: Using a Simple Merkle Tree**

In this challenge, you will use the ‘merkletreejs’ library to construct a simple Merkle Tree from some input data. You will then generate a proof for a leaf node and verify it. This task is analogous to verifying a transaction in a block in a blockchain.

```jsx
const MerkleTree = require('merkletreejs');
const crypto = require('crypto');

function hashFunction(data) {
  const hash = crypto.createHash('sha256');
  hash.update(data);
  return hash.digest();
}

// Create tree
const leaves = ['a', 'b', 'c', 'd'].map(x => hashFunction(x));
// TODO: Build the Merkle tree using the leaves and hashFunction. Compute the root of the tree and print it.

// Generate and verify proof
const leaf = hashFunction('b');
// TODO: Generate a proof for the leaf 'b' and verify it against the root of the tree. It should return true if the leaf is part of the tree.
```

Tip: Refer to the `merkletreejs` library [documentation](https://github.com/merkletreejs/merkletreejs) for the functions needed to build the tree, generate the proof, and verify it.

### **Challenge 4: Implementing Pedersen Commitments**

This challenge is a little more involved, but should be more rewarding. Here, you will be creating a Javascript object capable of Pedersen Commitments. This template should get you started:

```jsx
class PedersenCommitment {
  constructor() {
    // Set prime number (p) and generator (g)
    this.p = BigInt(23); // use a large prime in a real-world scenario
    this.g = BigInt(4); // use a large number in a real-world scenario
    this.h = null;
    this.r = null;
    this.s = null;
  }

  // Generate 'h' with a random number 'r' (h = g^r mod p)
  generateH() {
    // TODO: Generate a random number r (and save it to this.r)
    // TODO: Calculate h using g, r and p (and save it to this.h)
  }

  // Generate the commitment (g^s * h^r mod p)
  generateCommitment(s) {
    // TODO: Convert s to BigInt (and save it to this.s)
    // TODO: Calculate and return the commitment using g, s, h, r and p
  }

  // Reveal the secret number and random number (s, r)
  reveal() {
    // TODO: Return the secret and random number
  }

  // Verify the commitment (g^s * h^r mod p)
  verify(s, r, C) {
    // TODO: Verify the commitment by recalculating it and comparing with C
  }
}

// Test the PedersenCommitment
const pc = new PedersenCommitment();
pc.generateH();

// Party A: Generate a commitment
let secretNumber = 7;
let commitment = pc.generateCommitment(secretNumber);
console.log("Commitment: ", commitment);

// Party A: Reveal the secret and random number
let reveal = pc.reveal();
console.log("Revealed: ", reveal);

// Party B: Verify the commitment
let verification = pc.verify(reveal.s, reveal.r, commitment);
console.log("Verification: ", verification);
```

If everything worked properly, the final output should read:

```
Verification:  true
```

Congrats on reaching the end of this module!

## **Conclusion**

In summary, we’ve ventured through some very important cryptographic primitives, gaining insights into encryption, hash functions, Merkle trees, and more. These components underpin blockchain technologies and zero-knowledge proofs. Moving forward, our next module will navigate the fascinating field of elliptic curve cryptography.