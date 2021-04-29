let car = {
    make: 'Toyota',
    model: 'Avensis',
};

let newObj = {
    temp: 21,
    tempSettings: 21,
    adjustTemp: () => this.temp < this.tempSettings ? this.temp++ : this.temp--,
};

car = Object.assign(car, newObj);

console.log(car);