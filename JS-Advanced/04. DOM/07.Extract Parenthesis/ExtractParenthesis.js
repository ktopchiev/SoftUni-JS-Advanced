function extract(content) {
    let text = document.getElementById(content).innerHTML;

    let regExp = /\(([^)]+)\)/g;

    return text.match(regExp).join(';');
}