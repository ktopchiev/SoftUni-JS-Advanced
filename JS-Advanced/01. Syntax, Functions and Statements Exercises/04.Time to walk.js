function timeToWalk(steps, footprintLength, speed) {

    let distanceInMeters = steps * footprintLength;
    let minutesBreak = Math.floor(distanceInMeters / 500);
    let minutesToHours = minutesBreak / 60;
    let time = distanceInMeters / (speed * 1000);
    time = time + minutesToHours;

    let hours = '00';
    let minutes = '00';
    let seconds = '00';

    if (time < 1) {
        time = time * 60;
        minutes = time.toString().split('.')[0];
        seconds = time - minutes;
        seconds = Math.round(seconds * 60);
    } else {
        hours = Math.floor(time);
        minutes = (time - hours) * 60;
        seconds = Math.round((minutes - Math.floor(minutes)) * 60);
        minutes = Math.floor(minutes);
    }

    if(minutes < 10 && minutes > 0){
        minutes = String(`0${minutes}`);
    }

    if(hours < 10 && hours > 0){
        hours = String(`0${hours}`);
    }

    if(seconds < 10 && seconds > 0){
        seconds = String(`0${seconds}`);
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}

// timeToWalk(23445, 0.70, 5.5);