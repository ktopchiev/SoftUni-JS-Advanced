function diagonalSums(matrix) {

    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = row; col <= row; col++) {
            sumMainDiagonal += matrix[row][col];
            sumSecondaryDiagonal += matrix[row][matrix.length - 1 - col];
        }
    }

    console.log(`${sumMainDiagonal} ${sumSecondaryDiagonal}`);
}

let matrix = [
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
];

diagonalSums(matrix);