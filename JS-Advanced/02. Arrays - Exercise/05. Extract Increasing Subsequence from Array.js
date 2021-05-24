function extract(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] < numbers[i + 1]) {
            result.push(numbers[i]);
        } else {
            result.push(numbers[i]);
            i++;
        }
    }

    return result;
}

let arrayOfNumbers = [1, 
    2, 
    3,
    4
    ];

console.log(extract(arrayOfNumbers));