function townPopulation(array) {

    let towns = [];

    for (const row of array) {

        let newTownObj = {};
        let town = row.split('<->');
        let name = town[0];
        let population = Number(town[1]);

        if (!towns.some(o => o.name === name)) {
            newTownObj.name = name;
            newTownObj.population = population;
            towns.push(newTownObj);
        } else {
            let existingObject = towns.find(o => o.name === name);
            existingObject.population += population;
        }
    }

    for (const town of towns) {
        console.log(`${town.name}: ${town.population}`);
    }
}

let array = [
    'Sofia <-> 1200000',
    'Sofia <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
];

townPopulation(array);
