let lookupChar = require('../03-Char-lookup');
let assert = require('chai').assert;

describe('Test lookupChar functionallity()', () => {
    it('Should return undefined when a non string is passed as argument', () => {
        //Arrange
        let input = 1;
        let expectedResult = undefined;
        //Act
        let actualResult = lookupChar(input);
        //Assert
        assert.equal(expectedResult, actualResult);
    });

    it('Shoud return "Incorrect index" when negative index is provided', () => {
        let negativeIndex = -1;
        let string = 'string';
        let msg = 'Incorrect index';

        let actualResult = lookupChar(string, negativeIndex);

        assert.equal(actualResult, msg);
    });

    it('Shoud return "Incorrect index" when index outside of the bounds is provided', () => {
        let positiveIndex = 50;
        let string = 'string';
        let msg = 'Incorrect index';

        let actualResult = lookupChar(string, positiveIndex);

        assert.equal(actualResult, msg);
    });

    it('Shoud return undefined when floating number index is provided', () => {
        let floatIndex = 1.5;
        let string = 'string';
        let expectedResult = undefined;

        let actualResult = lookupChar(string, floatIndex);

        assert.equal(actualResult, expectedResult);
    });

    it('Should return empty string when non valid string length is provided ', () => {
        let index = 5;
        let string = 'some';
        let msg = 'Incorrect index';

        let actualResult = lookupChar(string, index);

        assert.equal(actualResult, msg);
    });

    it('Should return char at specified index position', () => {
        //Arrange
        let input = 'char';
        let index = 0;
        let expectedResult = 'c';
        //Act
        let actualResult = lookupChar(input, index);
        //Assert
        assert.equal(expectedResult, actualResult);
    });
});