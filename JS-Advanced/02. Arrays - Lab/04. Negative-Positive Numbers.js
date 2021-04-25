let array = [3, -2, 0, -1];

function solve(array) {
    let positives = array.filter(x => x >= 0);
    let negatives = array.filter(x => x < 0);
    let result = [];

    negatives.forEach(num => {
        result.unshift(num);
    });

    positives.forEach(num => {
        result.push(num);
    });

    result.forEach(x => {
        console.log(x);
    });
}

solve(array);