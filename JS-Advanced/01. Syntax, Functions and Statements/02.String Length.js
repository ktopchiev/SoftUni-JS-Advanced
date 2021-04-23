let str1 = 'koko'; // 4
let str2 = 'misho'; //5
let str3 = 'karlson'; //7

function stringLength(str1, str2, str3){
    let sumLength = str1.length + str2.length + str3.length;
    console.log(sumLength);
    let avgLength = Math.floor(sumLength / 3);
    console.log(avgLength);
}

stringLength(str1, str2, str3);