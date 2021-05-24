function delimit(array, stringDelimiter) {
    return array.join(stringDelimiter);
}

let arr = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five'
];

let delimiter = '-';


console.log(delimit(arr, delimiter));