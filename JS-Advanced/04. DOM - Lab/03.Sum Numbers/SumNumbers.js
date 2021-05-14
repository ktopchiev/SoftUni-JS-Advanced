function calc() {
    let firstNum = parseInt(document.getElementById('num1').value);
    let secondNum = parseInt(document.getElementById('num2').value);
    let sum = firstNum + secondNum;
    let resultField = document.getElementById('sum');
    resultField.value = sum;

}
