function sortByTwoCriteria(array) {

    array = array.sort((a, b) => a.localeCompare(b));
    array = array.sort((a, b) => a.length - b.length);
    return array.join('\n');
}

console.log(sortByTwoCriteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]
));