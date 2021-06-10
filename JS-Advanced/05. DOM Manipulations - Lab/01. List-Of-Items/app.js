function addItem() {
    let input = document.getElementById('newItemText').value;
    let items = document.getElementById('items');
    let cloning = items.children[0].cloneNode();
    cloning.textContent = input;
    items.appendChild(cloning);
}