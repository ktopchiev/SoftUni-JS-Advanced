function solution() {
    let result = '';
    return {
        append(string) { result += string; },
        removeStart(number) { result = result.substr(number, result.length - 1); },
        removeEnd(number) { result = result.substr(0, result.length - number); },
        print() { console.log(result); },
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
