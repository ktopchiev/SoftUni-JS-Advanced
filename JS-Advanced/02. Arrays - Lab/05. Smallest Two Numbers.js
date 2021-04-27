let numbersArray = [30, 15, 50, 5];

function solve(array) {

    let result = [];
    array.sort((x, y) => x - y);
    result.push(array[0]);
    result.push(array[1]);

    console.log(result.join(' '));
}

solve(numbersArray);