function extract(content) {
    let text = document.getElementById(content).innerHTML;

    let regExp = /\(([^)]+)\)/g;
    let matches = [...text.matchAll(regExp)];
    let result = [];


    for (let row = 0; row < matches.length; row++) {
        for (let col = 1; col < matches[row].length; col++) {
            result.push(matches[row][col])
        }

    }
    return result.join(';');
}