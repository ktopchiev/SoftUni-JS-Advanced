function sameNumber(n) {

    // let numFunc = num => Number(num);
    let numberArray = Array.from(String(n));
    let areSame = true;

    for (let i = 0; i < numberArray.length; i++) {
        if (i !== numberArray.length - 1 && numberArray[i] !== numberArray[i + 1]) {
            areSame = false;
            break;
        }
    }

    console.log(areSame);

    let sum = 0;

    numberArray.forEach(element => {
        sum += Number(element);
    });

    console.log(sum);
}

sameNumber(1234);