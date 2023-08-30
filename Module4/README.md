# 💪 Exercises

Reference: [Module 4 - zkSNARKs](https://pse-team.notion.site/Module-4-zkSNARKs-700116d91fa0465fb8c7b98981c7e137)

Answer the following questions (in as much detail as you like).

## Homomorphic Hiding

1. Explain homomorphic hiding in your own words.

```
Hide the actual databy doing some operations on encrypted data and ensuring that the results would be the same as if we did the same operations on the unencrypted data first and then encrypted the result.
```

## Arithmetic Circuits

1. What is the primary purpose of converting a problem into an arithmetic circuit?
2. What are the main components of an arithmetic circuit?

## Rank-1 Constraint System (R1CS)

1. Describe the Rank-1 Constraint System (R1CS) in your own words.
2. Why is R1CS essential in the zkSNARK construction pipeline?

## Quadratic Arithmetic Program (QAP)

1. What is the primary goal of converting R1CS into a QAP?
2. How does QAP aid in the zkSNARK proof generation process?
3. Why are polynomials central to the QAP representation?

## The Pinocchio Protocol

1. Why is the Pinocchio Protocol considered a significant step towards practical zkSNARK construction?
2. How does the Pinocchio Protocol utilize QAP representations?
3. What role do elliptic curve pairings play in the Pinocchio Protocol?

## Groth16

1. What makes Groth16 a popular choice for zkSNARK constructions in blockchain technologies?
2. Describe the main advantage and disadvantage of the Groth16 proof system.
3. How does Groth16 differ from the original Pinocchio Protocol?

## PLONK

1. What are the advantages of PLONK over Groth16? What are the disadvantages?
2. How does PLONK eliminate the need for a new trusted setup for every circuit?