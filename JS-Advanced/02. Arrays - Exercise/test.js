let array = [1, 2, 3, 4];

let result = array.reduce((result, currentValue) => {
    return result + currentValue;
}, 0);

console.log(result);