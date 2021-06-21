class Car {
    constructor(model, make) {
        this.model = model;
        this.make = make;
    }

    get age(){
        return this.model;
    }

    set year(value) {
        this.year = value;
    }
}