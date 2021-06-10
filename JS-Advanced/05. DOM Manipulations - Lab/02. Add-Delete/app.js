function addItem() {
    let list = document.getElementById('items');
    let listItem = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.addEventListener('click',function remove() {
        let parent = a.parentElement;
        list.removeChild(parent);
    });
    let inputText = document.getElementById('newItemText').value;
    listItem.innerText = inputText;
    a.innerText = '[Delete]';
    listItem.appendChild(a);
    list.appendChild(listItem);
}