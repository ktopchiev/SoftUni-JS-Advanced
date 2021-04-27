function processOddPositions(array) {
    return array.filter((x, i) => i % 2 !== 0)
    .reverse()
    .map(x => x * 2)
    .join(' ');
}

let array = [3, 0, 10, 4, 7, 3];
console.log(processOddPositions(array));