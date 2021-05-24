function solve(params) {
    let arr = [];
    for (let i = 0; i < params.length; i++) {
        if (params[i] === 'add') {
            arr.push(i + 1);
        } else if (params[i] === 'remove') {
            arr.pop();
        }
    }

    return arr.join('\n');
}

let array = ['add',
    'add',
    'add'];



console.log(solve(array));