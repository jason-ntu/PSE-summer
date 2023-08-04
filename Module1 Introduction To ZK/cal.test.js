const chai = require('chai');
const modularCalculator = require('./cal.js');

const expect = chai.expect;

describe('modular calculator', () => {
    it('should add two numbers correctly', () => {
        const result = modularCalculator('+', 10, 15, 12);
        expect(result).to.equal(1);
    });

    it('should subtract two numbers correctly', () => {
        const result = modularCalculator('-', 10, 15, 12);
        expect(result).to.equal(7);
    });

    it('should multiply two numbers correctly', () => {
        const result = modularCalculator('*', 10, 15, 12);
        expect(result).to.equal(6);
    });

    it('should add two negative numbers correctly', () => {
        const result = modularCalculator('+', -10, -15, 12);
        expect(result).to.equal(11);
    });

    it('should multiply two numbers correctly even if one of them is negative', () => {
        const result = modularCalculator('*', 10, -15, 12);
        expect(result).to.equal(6);
    });
});