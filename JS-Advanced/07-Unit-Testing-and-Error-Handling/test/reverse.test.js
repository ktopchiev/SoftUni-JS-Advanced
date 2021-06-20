let { assert, expect, should } = require('chai');
let reverseArr = require('../reverse');

describe('Testing functionallity', () => {
    it('Should fail when non array argument is provided', () => {
        //Arrange
        let input = 1;

        //Act
        let actualResult = reverseArr(input);

        //Assert
        assert.notEqual(actualResult, []);
    });

    it('Should pass when array argument is provided', () => {
        let input = [1, 2, 3];
        let expectedResult = [3, 2, 1];

        let actualResult = reverseArr(input);

        expect(actualResult).to.equal(expectedResult);
    });
});