function showText() {
    let textElement = document.getElementById('text');
    let text = textElement.innerHTML;
    let readMoreLink = document.getElementById('more');
    readMoreLink.setAttribute('style', 'display:none');
    textElement.setAttribute('style','display: inline');

}