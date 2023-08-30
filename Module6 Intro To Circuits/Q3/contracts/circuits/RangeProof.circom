pragma circom 2.0.0;

include "../../node_modules/circomlib/circuits/comparators.circom";

template RangeProof(n) {
    assert(n <= 252);
    signal input in; // this is the number to be proved inside the range
    signal input range[2]; // the two elements should be the range, i.e. [lower bound, upper bound]
    signal output out;

    component lt = LessEqThan(n);
    component gt = GreaterEqThan(n);

    // [assignment] insert your code here
    // Check if in is greater or equal to the lower bound
    gt.in[0] <== in;
    gt.in[1] <== range[0];

    // Check if in is less or equal to the upper bound
    lt.in[0] <== in;
    lt.in[1] <== range[1];

    // The result is 1 if both conditions also return 1
    out <== gt.out * lt.out;
}

component main { public [ range ] } = RangeProof(32);

/* INPUT = {
    "in": "5",
    "range": ["1", "10"]
} */