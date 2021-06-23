class Parking {


    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length === this.capacity) {
            throw new Error(`Not enough parking space`);
        }

        let newCar = { carModel, carNumber, payed: false };
        this.vehicles.push(newCar);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let carForRemove = this.vehicles.find(car => car.carNumber === carNumber);

        if (!carForRemove) {
            throw new Error("The car, you're looking for, is not found.");
        }

        if (!carForRemove.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        } else {
            this.vehicles = this.vehicles.filter(car => car.carNumber !== carNumber);
            return `${carNumber} left the parking lot.`;
        }
    }

    pay(carNumber) {

        let car = this.vehicles.find(car => car.carNumber === carNumber);

        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (car.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        } else {
            car.payed = true;
            return `${carNumber}'s driver successfully payed for his stay.`;
        }
    }

    getStatistics(carNumber) {
        if (carNumber === undefined) {
            let sortedVehicles = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));

            let output = sortedVehicles.reduce((acc, currentCar) => {
                let payed = currentCar.payed ? "Has payed" : "Not payed";
                acc += `${currentCar.carModel} == ${currentCar.carNumber} - ${payed}\n`;
                return acc;
            }, `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`);

            return output.trim();
            
        } else {
            let car = this.vehicles.find(car => car.carNumber === carNumber);
            return `${car.carModel} == ${car.carNumber} - ${car.payed ? "Has payed" : "Not payed"}`;
        }
    }
}


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.pay("TX3691CA"));
console.log(parking.getStatistics());
