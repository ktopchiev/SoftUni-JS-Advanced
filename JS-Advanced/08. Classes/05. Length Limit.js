
class Stringer {
    constructor(someString, someLength) {
        this.innerString = someString;
        this.innerLength = Number(someLength);
    }

    decrease(number) {
        this.innerLength = this.innerLength - Number(number) < 0 ? 0 : this.innerLength - Number(number);
    };

    increase(number) {
        this.innerLength += Number(number);
    }

    toString() {
        if (this.innerLength === 0) {
            return '...'
        } else if (this.innerString.length <= this.innerLength) {
            return this.innerString;
        } else {
            return this.innerString.slice(0, this.innerLength) + '...'
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString());
