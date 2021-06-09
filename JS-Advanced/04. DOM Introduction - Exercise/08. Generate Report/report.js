function generateReport() {
    
    let table = document.getElementsByTagName('table')[0];
    let tableHead = table.querySelector('thead tr');
    let tableBody = table.querySelector('tbody');

    function getCheckedHeadersIndexes(tableHead) {
        let indexes = [];

        for (let i = 0; i < tableHead.cells.length; i++) {

            let checkedBox = tableHead.children[i].firstElementChild.checked
                ? indexes.push({
                    [i]: tableHead.children[i].textContent.toLowerCase().trim()
                })
                : null;
        }

        return indexes;
    }

    let checkedHeadersIndexes = getCheckedHeadersIndexes(tableHead);

    function getDataFromTable(checkedHeadersIndexes, tableBody) {
        let data = [];
        // For every row create object that combines checked
        // headers as a properties and return array of created objects
        for (let i = 0; i < tableBody.children.length; i++) {
            let row = tableBody.children[i];
            let obj = {};
            for (let col = 0; col < row.children.length; col++) {
                checkedHeadersIndexes.forEach(object => {
                    let key = Number(Object.keys(object)[0]);
                    let value = Object.values(object)[0];
                    if (key === col) {
                        obj[value] = row.children[col].textContent
                    };
                });
            }

            data.push(obj);
        }

        return data;
    }

    let dataFromTableRows = getDataFromTable(checkedHeadersIndexes, tableBody);
    let output = document.querySelector('#output');
    output.value = JSON.stringify(dataFromTableRows);
}