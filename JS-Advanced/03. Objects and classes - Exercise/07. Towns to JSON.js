function townsToJSON(table) {
    let result = [];

    const replacer = function replace(array) {
        let [a, b, c] = array.split(' | ').map(element => element.replace('| ', '')).map(element => element.replace(' |', ''));
        return [a, b, c];
    };

    let [town, latitude, longtitude] = replacer(table[0]);

    for (let i = 1; i < table.length; i++) {
        let townObj = {};
        let [townData, latitudeData, longtitudeData] = replacer(table[i]).map(el => isNaN(Number(el)) ? el : Number(el));
        townObj[town] = townData;
        townObj[latitude] = Number(latitudeData.toFixed(2));
        townObj[longtitude] = Number(longtitudeData.toFixed(2));

        result.push(townObj);
    }

    return JSON.stringify(result);
}

let arr = [
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
];

console.log(townsToJSON(arr));