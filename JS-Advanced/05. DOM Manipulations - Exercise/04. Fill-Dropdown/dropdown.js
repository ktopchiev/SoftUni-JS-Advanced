function addItem() {
    let textInput = document.querySelector('#newItemText');
    let valueInput = document.querySelector('#newItemValue');

    let newOption = document.createElement('option');
    newOption.textContent = textInput.value;
    newOption.value = valueInput.value;

    let selectMenu = document.getElementById('menu');
    selectMenu.appendChild(newOption);

    textInput.value = '';
    valueInput.value = '';
}