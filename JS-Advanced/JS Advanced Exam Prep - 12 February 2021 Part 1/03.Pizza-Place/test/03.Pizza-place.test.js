let pizzUni = require('../03.Pizza-place');

let assert = require('chai').assert;

describe('Test PizzUni functionallity', () => {

    describe('Test makeAnOrder() functionallity', () => {

        it('Should return object with correct properties', () => {
            let obj = {
                orderedPizza: 'Pepperoni',
                orderedDrink: false
            }

            let expectedResult = `You just ordered ${obj.orderedPizza}`;

            let actualResult = pizzUni.makeAnOrder(obj);

            assert.equal(actualResult, expectedResult);
        });

        it('Should throw error if orderedPizza property is not set', () => {
            let obj = {
                orderedDrink: false
            }

            let errorMessage = 'You must order at least 1 Pizza to finish the order.';

            assert.throws(() => new pizzUni.makeAnOrder(obj), errorMessage);
        });

        it('Should return object with correctly setted properties', () => {
            let obj = {
                orderedPizza: 'Pepperoni',
                orderedDrink: 'Cola'
            }

            let expectedResult = `You just ordered ${obj.orderedPizza} and ${obj.orderedDrink}.`;

            let actualResult = pizzUni.makeAnOrder(obj);

            assert.equal(actualResult, expectedResult);
        });
    });

    describe('Test getRemainingWork() functionallity', () => {

        it('Should return "All orders are complete" if all statuses in array are in ready state', () => {
            let input = [{pizzaName: 'Pepperoni', status: 'ready' }];

            let expectedResult = 'All orders are complete!';

            let actualResult = pizzUni.getRemainingWork(input);

            assert.equal(actualResult, expectedResult);
        });

        it('Should return "The following pizzas are still preparing:" if not all statuses in array are in ready state', () => {
            let input = [
                {pizzaName: 'Pepperoni', status: 'ready' },
                {pizzaName: 'Margarita', status: 'preparing' }
             ];

            let expectedResult = `The following pizzas are still preparing: Margarita.`;

            let actualResult = pizzUni.getRemainingWork(input);

            assert.equal(actualResult, expectedResult);
        });

        it('Should join pizza names if more than one pizza is not in ready state', () => {
            let input = [
                {pizzaName: 'Pepperoni', status: 'ready' },
                {pizzaName: 'Margarita', status: 'preparing' },
                {pizzaName: 'Capricozza', status: 'preparing' }
             ];

            let expectedResult = `The following pizzas are still preparing: Margarita, Capricozza.`;

            let actualResult = pizzUni.getRemainingWork(input);

            assert.equal(actualResult, expectedResult);
        });
    });

    describe('Test orderType() functionallity', () => {

        it('Should return total sum if order type is Delivery', () => {
            let totalSum = 1;
            let typeOfOrder = 'Delivery';

            let expectedResult = 1;

            let actualResult = pizzUni.orderType(totalSum, typeOfOrder);

            assert.equal(actualResult, expectedResult);
        });

        it('Should subtract from total sum multiplied total sum bby 0.1 if order type is Carry Out', () => {
            let totalSum = 10;
            let typeOfOrder = 'Carry Out';

            let expectedResult = 9;

            let actualResult = pizzUni.orderType(totalSum, typeOfOrder);

            assert.equal(actualResult, expectedResult);
        });
    });
});