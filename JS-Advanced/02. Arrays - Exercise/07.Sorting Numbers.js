function sortArray(array) {
    let result = [];
    array = array.sort((a, b) => a - b);
    let secondArray = array.slice().reverse();
    for (let i = 0; i < Math.ceil(array.length / 2); i ++) {
        if (array[i] !== secondArray[i]) {
            
            result.push(array[i]);
            result.push(secondArray[i]);
        }
    }

    return result;
}

let array = [1, 1, 2, 2, 3, 3, 4, 4, 5]; //9
console.log(sortArray(array));