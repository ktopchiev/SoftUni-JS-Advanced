const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

let assert = require('chai').assert;

describe("Tests numberOperations", function () {
    describe("Test powNumber", function () {
        it("Should return number powered on itself", function () {
            let num = 2;

            let expectedResult = 4;

            let actualResult = numberOperations.powNumber(num);

            assert.equal(actualResult, expectedResult);
        });
    });

    describe("Test numberChecker", function () {
        it("Should throw error when number input is NaN", function () {
            let num = 'a';

            let expectedResult = 'The input is not a number!';

            assert.throws(() => new numberOperations.numberChecker(num), expectedResult);
        });

        it("Should return message when number is lower than 100", () => {
            let num = 1;

            let expectedResult = 'The number is lower than 100!';

            let actualResult = numberOperations.numberChecker(num);

            assert.equal(actualResult, expectedResult);
        });

        it("Should return message when number is greater than 100", () => {
            let num = 101;

            let expectedResult = 'The number is greater or equal to 100!';

            let actualResult = numberOperations.numberChecker(num);

            assert.equal(actualResult, expectedResult);
        });

        it("Should return message when number is equal to 100", () => {
            let num = 100;

            let expectedResult = 'The number is greater or equal to 100!';

            let actualResult = numberOperations.numberChecker(num);

            assert.equal(actualResult, expectedResult);
        });

        it("Should parse number and return message when number is sting", () => {
            let num = '100';

            let expectedResult = 'The number is greater or equal to 100!';

            let actualResult = numberOperations.numberChecker(num);

            assert.equal(actualResult, expectedResult);
        });

    });

    describe("Test sumArrays", () => {

        it("Should return sum of two arrays", () => {
            let firstInputArr = [1, 2];
            let secondInputArr = [1, 2];

            let expectedResult = [2, 4];

            let actualResult = numberOperations.sumArrays(firstInputArr, secondInputArr);

            assert.deepEqual(actualResult, expectedResult);
        });

        it("Should return sliced array at the end of summed array when one of the arrays provided is longer", () => {
            let firstArr = [1, 2, 3, 4];
            let secondArr = [1, 2, 3];

            let expectedResult = [2, 4, 6, 4];

            let actualResult = numberOperations.sumArrays(firstArr, secondArr);

            assert.deepEqual(actualResult, expectedResult);
        });
    });
});
