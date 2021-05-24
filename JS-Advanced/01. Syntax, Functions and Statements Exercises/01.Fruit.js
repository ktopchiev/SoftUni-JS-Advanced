function buyFruit(fruitType, grams, pricePerKg) {
    
    let kilos = grams / 1000;
    let price = kilos * pricePerKg;

    console.log(`I need $${price.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruitType}.`)
}

buyFruit('orange', 2500, 1.80);
