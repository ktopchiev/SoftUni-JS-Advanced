function findBiggestElement(matrix) {
    let biggestElement = matrix[0][0];

    for (const row of matrix) {
        for (const col of row) {
            if (col > biggestElement) {
                biggestElement = col;
            }
        }
    }

    return biggestElement;
}

let matrix = [
    [20, 50, 10],
    [8, 33, 145]
];

findBiggestElement(matrix);