function lowestPricesInCities(input) {
    let result = {};

    result = input.reduce((products, current) => {
        let [town, product, price] = current.split(' | ').map(el => isNaN(Number(el)) ? el : Number(el));
         products[product] ? products[product] : products[product] = {};
         products[product][town] = price;
        return products;
    },{})

    return Object.entries(result).map(product => {
        let productData = Object.entries(product[1]);
        return console.log(`${product[0]} -> ${productData[0][1]} (${productData[0][0]})`);
    })
}

let array = [
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
];


console.log(lowestPricesInCities(array));