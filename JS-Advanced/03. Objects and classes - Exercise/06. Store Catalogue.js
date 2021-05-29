function orderByAlphabetical(inputArray) {
    let result = {};

    inputArray.forEach(element => {
        let [product, price] = element.split(' : ').map(el => isNaN(Number(el)) ? el : Number(el));
        result[product] = price;
    });

    let firstLetter = '';

    return Object.entries(result).sort((a, b) => a[0].localeCompare(b[0])).forEach(el => {
        if (firstLetter !== el[0][0]) {
            firstLetter = el[0][0];
            console.log(firstLetter);
        }
        console.log(`${el[0]}: ${el[1]}`);
    });
}

let input = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'

];

console.log(orderByAlphabetical(input));