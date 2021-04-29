
function createAssemblyLine() {

    return {
        hasClima(car) {

            let newObj = {
                temp: 21,
                tempSettings: 21,
                adjustTemp: () => this.temp < this.tempSettings ? this.temp++ : this.temp--,
            }

            car = Object.assign(car, newObj);
        },
        hasAudio(car) {
            let newObj = {
                currentTrack: { name: null, artist: null },
                nowPlaying() {
                    if (this.currentTrack.name && this.currentTrack.artist) {
                        console.log(`Now playing: ${this.currentTrack.name} by ${this.currentTrack.artist}`);
                    }
                },
            }

            car = Object.assign(car, newObj);
        },
        hasParktronic(car) {
            let newObj = {
                checkDistance(distance) {
                    if (distance < 0.1) {
                        console.log('Beep! Beep! Beep!');
                    } else if (distance >= 0.1 && distance < 0.25) {
                        console.log('Beep! Beep!');
                    } else if (distance >= 0.25 && distance < 0.5) {
                        console.log('Beep!');
                    } else {
                        console.log("");
                    }
                },
            }
            car = Object.assign(car, newObj);
        }
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

//Input 1
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
// //Input 2
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
//Input 3
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
// //Input 4
console.log(myCar);