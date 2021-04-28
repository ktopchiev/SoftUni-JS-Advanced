function createCityRecord(name,numberOfPopulation,treasury) {

    let newCity = {};

    newCity.name = name;
    newCity.population = numberOfPopulation;
    newCity.treasury = treasury;

    return newCity;
}

let city = createCityRecord('Tortuga', 7000, 15000);

console.log(city);