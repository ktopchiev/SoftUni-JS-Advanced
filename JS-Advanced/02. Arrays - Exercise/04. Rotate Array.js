function rotate(array, rotationNum) {
    for (let i = 0; i < rotationNum; i++) {
        
        array.unshift(array.pop());
    }

    return array.join(' ');
}

let arr = [1, 2, 3, 4];

console.log(rotate(arr, 2));