function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let recipes = {
        apple() {
            ingredients.carbohydrate -= 1;
            ingredients.flavour -= 2;
        },
        lemonade() {
            ingredients.carbohydrate -= 10;
            ingredients.flavour -= 20;
        },
        burger() {
            ingredients.carbohydrate -= 5;
            ingredients.fat -= 7;
            ingredients.flavour -= 3;
        },
        eggs() {
            ingredients.protein -= 5;
            ingredients.fat -= 1;
            ingredients.flavour -= 1;
        },
        turkey() {
            ingredients.protein -= 10;
            ingredients.carbohydrate -= 10;
            ingredients.fat -= 10;
            ingredients.flavour -= 10;
        }
    }

    function checkQuantity() {
        for (const [key, value] of Object.entries(this)) {
            if (value < 0) {
                return `Error: not enough ${key} in stock`;
            }
        }
        return `Success`;
    }

    function getCurrentState() {
        let obj = Object.assign({}, this);
        return obj;
    }

    return function getInstructions(stringInput) {
        let instructions = stringInput.split(' ');
        let command = instructions.shift();
        if (command === 'restock') {
            let [microelement, quantity] = instructions;
            ingredients[microelement] += Number(quantity);
            return 'Success'
        } else if (command === 'prepare') {
            let [recipe, quantity] = instructions;
            let quantityCheckState;
            for (let i = 0; i < quantity; i++) {
                let currentState = getCurrentState.call(ingredients);
                recipes[recipe]();
                quantityCheckState = checkQuantity.call(ingredients);
                if (quantityCheckState.includes('Error')) {
                    ingredients = Object.assign({}, currentState);
                    break;
                }
            }
            return quantityCheckState;
        } else if (command === 'report') {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }
    }
}

let manager = solution();
// console.log(manager('restock flavour 50'));
// console.log(manager("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));