function extract(numbers) {

    let currentBiggest = numbers[0];

    let resultArr = numbers.reduce((result, current) => {

        if (current >= currentBiggest) {
            currentBiggest = current;
            result.push(currentBiggest);
        }

        return result;
    },[]);

    return resultArr;
}

let arrayOfNumbers = [
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
];


console.log(extract(arrayOfNumbers));