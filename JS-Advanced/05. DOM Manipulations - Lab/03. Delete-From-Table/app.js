function deleteByEmail() {
    let table = document.getElementById('customers');
    let input = document.querySelector('input[type="text"').value;
    let tableBody = table.getElementsByTagName('tbody')[0];
    let resultDiv = document.getElementById('result');
    let found = false;

    for (let i = 0; i < tableBody.children.length; i++) {
        if (tableBody.children[i].querySelector('td:nth-child(2)').innerText === input) {
           tableBody.removeChild(tableBody.children[i]);
            resultDiv.innerText = 'Deleted.';
            found = true;
        }
    }

    if (found === false) {
        resultDiv.innerText = 'Not found.';
    }
}