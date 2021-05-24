function getList(arrayOfNames) {
    let n = 0;
    arrayOfNames = arrayOfNames.sort((a, b) => a.localeCompare(b));
    arrayOfNames.forEach(element => {
        n++;
        console.log(`${n}.${element}`);
    });
}

let array = ["John", "Bob", "Christina", "Ema", "Bob"];

getList(array);
