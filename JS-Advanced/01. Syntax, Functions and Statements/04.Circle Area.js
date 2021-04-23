let input = 2;

function circleArea(input) {
    if (typeof input === 'number') {
        let area = Math.PI * input * input;
        console.log(Math.round(area * 100) / 100);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}

circleArea(input);