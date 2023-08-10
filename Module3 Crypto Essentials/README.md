# **💪 Exercises**

Reference: [Module 3 - Crypto Essentials](https://pse-team.notion.site/Module-3-Crypto-Essentials-Elliptic-Curves-and-More-7381134e70d744608e721db6662362d8)

Answer the following questions (in as much detail as you desire):

## Intro to Elliptic Curves

1. What is the general equation for an elliptic curve?

```
y^2 = x^3 + ax + b
```

2. How do you find the sum of two points P and Q on an elliptic curve?

```
Draw a line through P and Q. Find the third point of intersection. Reflect the third point of intersection across the x-axis. The reflected point is the sum of P and Q.
```

3. What is the special point on the elliptic curve that serves as the identity element for addition?

```
The point at infinity, denoted as O.
```

## Elliptic Curve Cryptography

1. What is the primary advantage of ECC over traditional methods like RSA?

```
ECC requires smaller keys for the same level of security. This results in faster computations, less power consumption, and reduced storage and bandwidth requirements, which are especially important for mobile devices.
```

2. How is the public key in ECC derived from the private key?

```
The public key is derived by multiplying the private key by the generator point.
```

3. What is the Elliptic Curve Discrete Logarithm Problem (ECDLP)?

```
The ECDLP is the problem of finding the scalar k (i.e. private key) given the point P (i.e. public key) and the generator point G such that kG = P. It's computationally difficult to solve.
```

## Schnorr Signatures and EdDSA

1. What are the primary advantages of Schnorr Signatures?

```
Schnorr Signatures are simple and efficient, and provide aggregation due to their linear structure.
```

2. What differentiates EdDSA from traditional Schnorr signatures?

```
While both are based on elliptic curves, EdDSA uses a specific type of elliptic curve called twisted Edwards curves. Besides, only EdDSA is deterministic, meaning the same message and private key will always produce the same signature.
```

## Pairing-Based Cryptography

1. What is a pairing in the context of elliptic curve cryptography?

```
A bilinear map that takes two points on two different elliptic curves and maps them to a point on a third elliptic curve. This operation allows for certain cryptographic constructions that are not possible with normal elliptic curve operations.
```

2. What are the three main properties of a bilinear map?

```
Bilinearity, non-degeneracy, and computability.
```

3. Name one cryptographic application that is enabled by pairings.

```
Tripartite Diffie-Hellman protocol, BLS signatures and Identity-based encryption (IBE). (ref: https://alinush.github.io/2022/12/31/pairings-or-bilinear-maps.html)
```

## KZG Polynomial Commitments

1. What is the primary purpose of a polynomial commitment scheme?

```
Using this scheme, a porver can commit to a polynomial and later reveal specific evaluations of the polynomial without revealing the entire polynomial, and these evaluations can be verified against the original commitment.
```

2. How is the commitment in the KZG scheme computed for a given polynomial and secret value?

```
The commitment to a polynomial f(x) is computed by evaluating the polynomial at a secret value s and then multiplying the result by the generator point G of the elliptic curve.
```

3. Why are KZG polynomial commitments considered efficient and succinct?

```
Because the commitment and proof are both single elliptic curve point, which is O(1) in size.
```

## Trusted Setup

1. Why is the trusted setup phase crucial for the security of certain cryptographic protocols?

```
The trusted setup phase is crucial for the security of certain cryptographic protocols because it generates the public parameters that are used in the protocol. If the setup is compromised, or if certain intermediate values (often called "toxic waste") are not properly discarded, they could  be manipulated to break the security of the protocol.
```

2. How is the trusted setup related to zk-SNARKs?

```
zk-SNARKs require a trusted setup to generate a common reference string (CRS) that is used by both the prover and verifier in the protocol. The security of zk-SNARKs relies on the fact that certain intermediate values during the CRS generation are destroyed, ensuring the integrity of the proofs.
```

3. What are some of the challenges associated with trusted setups?

```
The trusted setup is a single point of failure. Common challenges include the need for participants to trust that the setup was performed correctly and securely, the potential centralization of the setup process, and the need for transparency to gain trust from users. Besides, It's not feasible to have a trusted setup for every application that requires ZKP.
```