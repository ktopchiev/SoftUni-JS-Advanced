function sumTable() {
    let tableElement = document.querySelector('table');
    let tableRows = tableElement.getElementsByTagName('td');
    let sum = 0;

    for (let i = 1; i < tableRows.length - 2; i += 2) {
        const num = parseFloat(tableRows[i].innerHTML);
        sum += num;
        
    }

    let sumElement = document.getElementById('sum');
    sumElement.innerHTML = sum;
}