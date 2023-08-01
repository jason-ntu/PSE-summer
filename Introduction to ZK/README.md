# Exercise

Reference: [Module 1 - Intro to ZK](https://pse-team.notion.site/Module-1-Intro-to-ZK-60814ca60a0142349d96a5d72afe8f55)


## **Comprehension**

Summarize each of the following concepts in a few sentences:

1. Three-Colouring Graph problem with Hats
2. Ali Baba’s Cave analogy
3. The difference between interactive and non-interactive proofs

```
My Answer:

1. By covering the three-colored graph with hats, discovering the selected pair of vertices, and using a new random shuffle of the three colors, the prover can prove to the verifier that the graph is correctly colored.

2. An analogy that the prover leverages the idea of probability to prove to the verifier that he(she) does own the secret, while in the same time preventing the verifier or the third party from knowing anything more about the secret.

3. The former requires interaction between the prover and the verifier for more than once, while the latter requires interaction for only once.
```

## **Modular Arithmetic**

Solve the following problems and gain a practical understanding of modular arithmetic:

1. $7 mod 13$
2. $15 mod 13$
3. $(7+15) mod 13$
4. $(7 mod 13+15 mod 13) mod 13$

If the results of the third and fourth calculations match, they follow a “group structure”. Can you determine if these do?

```
My Answer:

1. 7 mod 13
2. 2 mod 13
3. 9 mod 13
4. 9 mod 13

Yes, they do follow a group structure.
```

## **Generators**

Consider the cyclic group $(Z12,+ mod 12)$, commonly referred to as the “additive group of integers modulo 12”. Address the following points:

1. What does the term ‘generator’ mean?
2. Can you find a generator for this group?
3. Are there other generators for this group? If yes, what are they?

```
My Answer:

1. An element of a group that can be used to generate all the other elements.
2. Yes, 1 is a generator for this group.
3. Yes, 5, 7, and 11 are also generators for this group (Basically all the numbers that are coprime to 12). 
```


## **Implementing a Modular Arithmetic Calculator**

Your task is to implement a simple modular arithmetic calculator in JavaScript. The calculator should support three operations: addition, subtraction, and multiplication.

The function `modularCalculator` should take four parameters:

- A string, `op`, indicating the operation. It will be one of ‘+’, ‘-’, or ‘*’.
- Two integers, `num1` and `num2`, which are the operands for the operation.
- An integer, `mod`, which is the modulus.

The function should return the result of performing the indicated operation on `num1` and `num2`, then take the result modulo `mod`.

Remember, the result of subtraction could be negative, and in this case, you should add `mod` to the result to ensure it’s positive.

For addition and multiplication, remember that JavaScript’s % operator gives the remainder, not the modulus, but these will be the same for positive numbers.

**Code Template:**

```jsx
function modularCalculator(op, num1, num2, mod) {
    // Your code here
}

modularCalculator('+', 10, 15, 12); // Should return: 1
modularCalculator('-', 10, 15, 12); // Should return: 7
modularCalculator('*', 10, 15, 12); // Should return: 6

```

```
My Answer: Check the file: cal.js in this folder. You can test it by running the command 'npm test' in your terminal.
```