function increase(num) {
    return this.x += num;
}

let obj = {
    x: 0,
}

let increaseObj = increase.bind(obj);

console.log(increaseObj(2));