function townPopulation(data) {
    let register = data.reduce((acc, currentString) => {
        let [name, population] = currentString.split('<->');
        acc[name]
        ? acc[name] += Number(population)
        : acc[name] = Number(population);
        return acc;
    }, {})

    for (const city in register) {
        console.log(`${city} : ${register[city]}`);
    }
}

let arr = [
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
];

townPopulation(arr);