function createHeroRegister(inputArray) {
    let result = [];

    for (const hero of inputArray) {
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push({name, level, items});
    }

    return JSON.stringify(result);
}

let input = [
    'Isacc / 25 / Apple, GravityGun',
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
];

console.log(createHeroRegister(input));