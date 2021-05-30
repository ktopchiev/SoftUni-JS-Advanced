function rectangle(width, height, color) {
    let rect = {};
    rect.width = Number(width);
    rect.height = Number(height);
    rect.calcArea = function () {return Number(this.width) * Number(this.height)};
    
    rect.color = color[0].toUpperCase() + color.substr(1, color.length);

    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
