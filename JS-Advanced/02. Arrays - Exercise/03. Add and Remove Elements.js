function solve(params) {
    let arr = [];
    for (let i = 0; i < params.length; i++) {
        if (params[i] === 'add') {
            arr.push(i + 1);
        } else if (params[i] === 'remove') {
            arr.pop();
        }
    }
    if (arr.length === 0) {
        return 'Empty';
    }
    return arr.join('\n');
}

let array = ['remove',
    'remove',
    'remove'];



console.log(solve(array));