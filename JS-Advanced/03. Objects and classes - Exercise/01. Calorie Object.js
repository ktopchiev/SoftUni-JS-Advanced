function composeObject(arrayOfStrings) {
    let object = {};
    while (arrayOfStrings.length > 0) {
        object[arrayOfStrings.shift()] = parseInt(arrayOfStrings.shift());
    }

    return object;
}

let arr = ['Yoghurt', '48', 'Rise', '138', 'Apple', '52'];
console.log(composeObject(arr));