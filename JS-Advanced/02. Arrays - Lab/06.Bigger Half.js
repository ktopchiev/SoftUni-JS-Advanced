function solve(array) {
    array.sort((x, y) => x - y);
    let length = array.length;
    let outputLength = Math.floor(length / 2);
    array.splice(0, outputLength);
    return array;
}

let numbersArray = [3, 19, 14, 7, 3];
let array = solve(numbersArray);