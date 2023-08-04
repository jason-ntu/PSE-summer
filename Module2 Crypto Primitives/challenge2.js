const crypto = require("crypto");
const poseidon = require("poseidon-encryption");

// SHA-256
const data = "This is some data X.";
// TODO: Compute the SHA-256 hash of the data and print it. Try changing the data slightly and observe the changes in the hash.
const hash = crypto.createHash("sha256");
hash.update(data);
const sha256Hash = hash.digest("hex");
console.log("SHA-256 Hash:", sha256Hash);

// Poseidon
const inputs = [1, 2, 3, 4];
// TODO: Compute the Poseidon hash of the inputs and print it. Remember that Poseidon accepts an array of integers as input.
const poseidonHash = poseidon.poseidon(inputs);
console.log("Poseidon Hash:", poseidonHash.toString());