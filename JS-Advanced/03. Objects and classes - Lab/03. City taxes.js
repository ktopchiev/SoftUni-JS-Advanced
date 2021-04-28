function cityTaxes(name, numberOfPopulation, treasury) {

    const newCityObj = {};

    newCityObj.name = name;
    newCityObj.population = numberOfPopulation;
    newCityObj.treasury = treasury;
    newCityObj.taxRate = 10;
    newCityObj.collectTaxes = () => 
        newCityObj.treasury
        += newCityObj.population
        * newCityObj.taxRate;
    newCityObj.applyGrowth = (percentage) => {
        percentage /= 100;
        let populationGrowthValue = newCityObj.population * percentage;
        newCityObj.population += populationGrowthValue;
    };
    newCityObj.applyRecession = (percentage) => {
        percentage /= 100;
        let treasuryDecreaseValue = newCityObj.treasury * percentage;
        newCityObj.treasury -= treasuryDecreaseValue;
    };

    return newCityObj;
}

const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);