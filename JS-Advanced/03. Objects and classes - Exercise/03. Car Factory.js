let requirements = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 17
};

function assembleCar(requirements) {
    let assembledCar = {};
    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };

    assembledCar.model = requirements.model;
    assembledCar.engine = {};

    if (requirements.power <= 90) {
        assembledCar.engine = smallEngine;
    } else if (requirements.power > 90 && requirements.power <= 120) {
        assembledCar.engine = normalEngine;
    } else if (requirements.power >= 200) {
        assembledCar.engine = monsterEngine;
    }

    assembledCar.carriage = {};
    assembledCar.carriage.type = requirements.carriage;
    assembledCar.carriage.color = requirements.color;

    let wheelsize = 2 * Math.round(requirements.wheelsize / 2) - 1; // Should be rounded down to the nearest odd number
    assembledCar.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

    return assembledCar;
}

console.log(assembleCar(requirements));
