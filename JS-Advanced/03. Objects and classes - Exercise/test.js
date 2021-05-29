let product = {
    Audi: {
        'Sofia City': 100000,
        'Mexico City': 99999,
        'Galapagos': 1,
    }
};

let entries = Object.entries(product);
let prices = Object.entries(entries[0][1]);
prices = prices.sort((a, b) => a[1] - b[1]);
console.log(price);