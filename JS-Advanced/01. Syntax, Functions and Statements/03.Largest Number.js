let num1 = 1;
let num2 = 2;
let num3 = 3;

function findLargestNumber(num1, num2, num3) {
    let largestNumber = Math.max(num1, num2, num3);
    console.log(`The largest number is ${largestNumber}.`);
}

findLargestNumber(num1, num2, num3);