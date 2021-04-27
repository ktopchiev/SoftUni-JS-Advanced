function sumFirstAndLastNumber(numbersArray) {
    let result = Number(numbersArray[0]) + Number(numbersArray[numbersArray.length - 1]);
    console.log(result);
}

let numbersArray = [1];

sumFirstAndLastNumber(numbersArray);