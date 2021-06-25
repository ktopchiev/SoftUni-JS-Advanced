let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}

let assert = require('chai').assert;

describe('Tests dealership', () => {

    describe('Tests newCarCost', () => {
        it('Should return final price with discount when old car model exist', () => {
            let oldCarModel = 'Audi A4 B8';
            let newCarPrice = 30000;

            let expectedResult = 15000;

            let actualResult = dealership.newCarCost(oldCarModel, newCarPrice);

            assert.equal(actualResult, expectedResult);
        });

        it('Should return new price when old car model does not exist', () => {
            let oldCarModel = 'Mercedes C 220';
            let newCarPrice = 30000;

            let expectedResult = 30000;

            let actualResult = dealership.newCarCost(oldCarModel, newCarPrice);

            assert.equal(actualResult, expectedResult);
        });

    });

    describe('Tests carEquipment', () => {
        it('Should return selected extras array', () => {
            let extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexesOfWantedExtras = [0, 2];

            let expectedResult = ['heated seats', 'sport rims'];

            let actualResult = dealership.carEquipment(extras, indexesOfWantedExtras);

            assert.deepEqual(actualResult, expectedResult);
        });
    });

    describe('Tests euroCategory', () => {
        it('Should return message with total price when category equal to 4 is provided', () => {
            let category = 4;

            let expectedResult = `We have added 5% discount to the final price: 14250.`;

            let actualResult = dealership.euroCategory(category);

            assert.deepEqual(actualResult, expectedResult);
        });

        it('Should return message with total price when category bigger than 4 is provided', () => {
            let category = 5;

            let expectedResult = `We have added 5% discount to the final price: 14250.`;

            let actualResult = dealership.euroCategory(category);

            assert.deepEqual(actualResult, expectedResult);
        });

        it('Should return message for no discount when category lower than 4 is provided', () => {
            let category = 3;

            let expectedResult = 'Your euro category is low, so there is no discount from the final price!';

            let actualResult = dealership.euroCategory(category);

            assert.deepEqual(actualResult, expectedResult);
        });
    });

});