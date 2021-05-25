function isItMagical(matrix) {

    function checkRowsForEquality(matrix) {
        let firstRowSum = 0;
        let nextRowSum = 0;
        let rowsEqual = true;

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row !== 0) {
                    nextRowSum += parseInt(matrix[row, col]);
                } else {
                    firstRowSum += parseInt(matrix[row, col]);
                }

            }

            if (row !== 0 && nextRowSum !== firstRowSum) {
                rowsEqual = false;
            }

            nextRowSum = 0;
        }

        return rowsEqual;
    }

    function checkColumnsForEquality(matrix) {
        let firstColSum = 0;
        let nextColSum = 0;
        let columnsEqual = true;
        let columnCounter = 0;

        for (let row = 0; row < matrix.length; row++) {
            for (let col = columnCounter; col <= columnCounter; col++) {
                if (col !== 0) {
                    nextColSum += parseInt(matrix[row][col]);
                } else {
                    firstColSum += parseInt(matrix[row][col]);
                }
            }

            if (row === matrix.length - 1 && columnCounter !== matrix.length) {
                row = -1;
                if (columnCounter > 0 && firstColSum !== nextColSum) {
                    columnsEqual = false;
                }
                columnCounter++;
                nextColSum = 0;
            }

            if (columnCounter === matrix.length) {
                break;
            }
        }

        return columnsEqual;
    }

    if (checkRowsForEquality(matrix)) {
        if (checkColumnsForEquality(matrix)) {
            return true;
        }
    }

    return false;
}

let matrix = [
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
];

console.log(isItMagical(matrix));