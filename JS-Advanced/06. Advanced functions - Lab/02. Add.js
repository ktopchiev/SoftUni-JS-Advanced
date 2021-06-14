let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

function solution(number) {
    return function(secondNumber) {
        return secondNumber + number;
    }
}