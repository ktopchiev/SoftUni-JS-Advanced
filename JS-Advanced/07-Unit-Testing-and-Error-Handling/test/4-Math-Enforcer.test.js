let mathEnforcer = require('../4-Math-Enforcer');
let assert = require('chai').assert;

describe('Test mathEnforcer functionallity', () => {
    describe('Test addFive()', () => {
        it('Should add 5 to a number provided', () => {
            let input = 1;
            let expectedResult = 6;
            let actualResult = mathEnforcer.addFive(input);
            assert.equal(actualResult, expectedResult);
        });

        it('Should return undefined when a non number is provided as argument', () => {
            assert.equal(mathEnforcer.addFive('1'), undefined);
        });

        it('Should pass when a negative number is provided', () => {
            assert.equal(mathEnforcer.addFive(-1), 4);
        });

        it('Should pass when a floating number is provided', () => {
            assert.equal(mathEnforcer.addFive(0.01), 5.01);
        });
    });

    describe('Test subtractTen()', () => {
        it('Should subtract 10 to a number provided', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0);
        });

        it('Should return undefined when a non number is provided as argument', () => {
            assert.equal(mathEnforcer.subtractTen('1'), undefined);
        });

        it('Should pass when a negative number is provided', () => {
            assert.equal(mathEnforcer.subtractTen(-1), -11);
        });

        it('Should pass when a floating number is provided', () => {
            assert.equal(mathEnforcer.subtractTen(-0.01), -10.01);
        });
    })

    describe('Test sum()', () => {
        it('Should return sum of numbers provided', () => {
            assert.equal(mathEnforcer.sum(10, 10), 20);
        });

        it('Should return sum of negative numbers provided', () => {
            assert.equal(mathEnforcer.sum(-10, -10), -20);
        });

        it('Should return sum of positive floating numbers provided', () => {
            assert.equal(mathEnforcer.sum(0.1, 0.1), 0.2);
        });

        it('Should return sum of negative floating numbers provided', () => {
            assert.equal(mathEnforcer.sum(-0.1, -0.1), -0.2);
        });

        it('Should return undefined when a non numbers are provided as arguments', () => {
            assert.equal(mathEnforcer.sum('1', '2'), undefined);
        });

        it('Should return undefined when a non number is provided as first argument', () => {
            assert.equal(mathEnforcer.sum('1', 2), undefined);
        });

        it('Should return undefined when a non number is provided as second argument', () => {
            assert.equal(mathEnforcer.sum(1, '2'), undefined);
        });

        it('Should pass when a negative number is provided as a first argument', () => {
            assert.equal(mathEnforcer.sum(-1 , 1), 0);
        });

        it('Should pass when a negative number is provided as a second argument', () => {
            assert.equal(mathEnforcer.sum(1 , -1), 0);
        });
    })
});