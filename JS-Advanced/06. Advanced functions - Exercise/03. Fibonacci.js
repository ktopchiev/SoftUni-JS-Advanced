function getFibonator() {
    let n1 = 0, n2 = 1, nextTerm;

    return function f() {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        return n1;
    }
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());