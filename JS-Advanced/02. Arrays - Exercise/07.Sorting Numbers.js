function sortArray(array) {
    let result = [];
    array = array.sort((a, b) => a - b);
    let secondArray = array.slice().reverse();
    for (let i = 0; i < array.length / 2; i ++) {
        result.push(array[i]);
        result.push(secondArray[i]);
    }
    return result;
}

let array = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56];
console.log(sortArray(array));