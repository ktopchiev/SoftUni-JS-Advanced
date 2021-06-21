class Stringer {
    innerString;
    innerLength;
    actualString;

    constructor(string) {
        this.innerString = string;
        this.innerLength = string.length;
        this.actualString = string;
    }

    increase(length) {
        if (length >= 0) {
            let mainString = this.innerString;
            let actualLength = this.innerLength;
            mainString = mainString.substr(actualLength, mainString.length);
            mainString = mainString.substr(0, length);
            this.actualString = this.actualString.substr(0, actualLength);
            this.actualString += mainString;
            let leftDotsNumber = this.innerString.length - this.actualString.length;
            this.actualString += '.'.repeat(leftDotsNumber);
            this.innerLength += length;
        }
    }

    decrease(length) {
        if (length >= 0) {
            if (length > this.innerLength) {
                this.actualString = '.'.repeat(3);
                this.innerLength = 0;
            }
            this.actualString = this.actualString.substring(0, this.innerLength - length);
            this.innerLength = this.actualString.length;
            this.actualString += '.'.repeat(length);
        }
    }

    toString() {
        if (this.innerLength > this.innerString.length) {
            this.actualString = this.actualString.substr(0, this.innerString.length)
            return this.actualString += '...';
        } else if (this.innerLength === 0) {
            return '...';
        }
        return this.actualString;
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
