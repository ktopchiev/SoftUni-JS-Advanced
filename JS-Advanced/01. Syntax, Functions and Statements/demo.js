let x = 0;

function riseUp(x) {
    x++;
    console.log(x);
    if (x === 10) {
        return;
    }
    riseUp(x);
}

riseUp(x);