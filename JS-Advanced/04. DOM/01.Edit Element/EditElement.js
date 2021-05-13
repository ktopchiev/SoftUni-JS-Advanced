function editElement(htmlElement, string, replacer) {
    
    htmlElement.innerHTML = htmlElement.innerHTML.split(string).join(replacer);
}