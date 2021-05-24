function printEveryNthElement(array, n) {
    let result = [];
    for (let i = 0; i < array.length; i+= n) {
        result.push(array[i]);
    }
    return result;
}

let array = [10, 20, 30, 40];

printEveryNthElement(array, 4);