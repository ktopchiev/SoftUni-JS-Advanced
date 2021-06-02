function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;

    let subtractionResult = Number(firstNumber) - Number(secondNumber);

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = subtractionResult;
    
}