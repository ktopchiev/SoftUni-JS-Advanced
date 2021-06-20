function reverseArr(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let current = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = current;
    }

    return array;
}

let input = [1, 2, 3];
console.log(reverseArr(input));

module.exports = reverseArr;