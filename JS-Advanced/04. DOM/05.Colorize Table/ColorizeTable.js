function colorize() {
    let tableElement = document.querySelector("table");
    let tableRowElement = tableElement.getElementsByTagName('tr');

    for (let i = 1; i < tableRowElement.length; i += 2) {
        const element = tableRowElement[i];
        element.style.backgroundColor = 'Teal';
    }
}