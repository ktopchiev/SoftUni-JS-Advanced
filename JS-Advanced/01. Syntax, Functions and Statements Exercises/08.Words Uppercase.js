function stringToUpper(string) {
    const regx = /[\s,!?.;]/;
    let wordsArr = string.split(regx).map(x => x.toUpperCase());
    let result = wordsArr.filter(x => x !== null && x !== '' && x !== "");
    console.log(result.join(', '));
}

stringToUpper('Hi,');