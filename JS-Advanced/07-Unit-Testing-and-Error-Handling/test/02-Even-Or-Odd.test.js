let isOddOrEven = require('../02-Even-Or-Odd');
let assert = require('chai').assert;

describe('Test isOddOrEven() functionallity', () => {
    it('Should return undefined when passing non string argument', () => {
        //Arrange
        let input = 1;
        let expectedResult = undefined;
        //Act
        let actualResult = isOddOrEven(input);
        //Assert
        assert.equal(actualResult,expectedResult);
    });

    it('Should return undefined when passing non string argument', () => {
        //Arrange
        let input = true;
        let expectedResult = undefined;
        //Act
        let actualResult = isOddOrEven(input);
        //Assert
        assert.equal(actualResult,expectedResult);
    });

    it('Should return even when passing string with even length', () => {
        //Arrange
        let input = 'koko';
        let expectedResult = 'even';
        //Act
        let actualResult = isOddOrEven(input);
        //Assert
        assert.equal(actualResult,expectedResult);
    });

    it('Should return odd when passing string with odd length', () => {
        //Arrange
        let input = 'kok';
        let expectedResult = 'odd';
        //Act
        let actualResult = isOddOrEven(input);
        //Assert
        assert.equal(actualResult,expectedResult);
    });

    it('Should not return even when passing string with odd length', () => {
        //Arrange
        let input = 'kok';
        let expectedResult = 'even';
        //Act
        let actualResult = isOddOrEven(input);
        //Assert
        assert.notEqual(actualResult,expectedResult);
    });

    it('Should not return odd when passing string with even length', () => {
        //Arrange
        let input = 'koko';
        let expectedResult = 'odd';
        //Act
        let actualResult = isOddOrEven(input);
        //Assert
        assert.notEqual(actualResult,expectedResult);
    });
});