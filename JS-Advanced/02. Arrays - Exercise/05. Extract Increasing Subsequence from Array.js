function extract(numbers) {
    let result = [];
    let currentBiggest = numbers[0];
    result.push(currentBiggest);

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > currentBiggest) {
            currentBiggest = numbers[i];
            result.push(currentBiggest);
        } else {
            continue;
        }
    }

    return result;
}

let arrayOfNumbers = [
    20,
    3,
    2,
    15,
    6,
    1

];


console.log(extract(arrayOfNumbers));