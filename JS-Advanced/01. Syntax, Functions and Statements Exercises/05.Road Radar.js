function roadRadar(speed, area) {

    let limit = 0;

    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
        default:
            break;
    }

    let speedDifference = speed - limit;
    let status = '';

    if (speedDifference <= 20) {
        status = 'speeding';
    } else if (speedDifference > 20 && speedDifference <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    if (speed <= limit && speed > 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if (speed > limit) {
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

roadRadar(40, 'city');

