const modular = function(num, mod) {
    return ((num % mod) + mod) % mod;
};

const modularCalculator = function(op, num1, num2, mod) {
    switch (op) {
        case '+':
            return modular((modular(num1, mod) + modular(num2, mod)), mod)
        case '-':
            return modular((modular(num1, mod) - modular(num2, mod)), mod)
        case '*':
            return modular((modular(num1, mod) * modular(num2, mod)), mod)
        default:
            return new Error('Invalid operator')
    }
};

module.exports = modularCalculator;