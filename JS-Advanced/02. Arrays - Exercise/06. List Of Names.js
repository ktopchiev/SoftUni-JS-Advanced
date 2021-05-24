function getList(arrayOfNames) {
    let n = 0;
    arrayOfNames = arrayOfNames.sort();
    arrayOfNames.forEach(element => {
        n++;
        console.log(`${n}.${element}`)
    });
}

let array = ["John", "Bob", "Christina", "Ema"];

getList(array);
