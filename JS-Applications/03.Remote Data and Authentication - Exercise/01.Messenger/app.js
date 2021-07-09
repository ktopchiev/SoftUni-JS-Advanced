let baseUrl = 'http://localhost:3030/jsonstore/messenger';
let textArea = document.getElementById('messages');
let nameInput = document.getElementById('author');
let contentInput = document.getElementById('content');

attachEvents();

function attachEvents() {
    let sendButton = document.getElementById('submit')
        .addEventListener('click', sendData);
    let refreshButton = document.getElementById('refresh')
        .addEventListener('click', refreshData);
}

function refreshData() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        let messagesString = '';
        for (const key in data) {
            let author = data[key].author;
            let content = data[key].content
            messagesString += `${author}: ${content}\n`;
        }
        textArea.textContent = messagesString;
    })
    .catch(error => console.error(error));
}

function sendData() {

    let authorInputValue = nameInput.value;
    let contentInputValue = contentInput.value;
    let notification = document.querySelector('div#controls p');

    if (!validateInput(authorInputValue, contentInputValue)){
        notification.textContent = 'Fields cannot be empty!';
        return;
    } else {
        notification.textContent = '';;
    }

    const data = createDataObject(authorInputValue, contentInputValue);

    fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    });

    clearInputFields();
}

function validateInput(author, content) {
    if(author !== '' || content !== '') {
        return true;
    }

    return false;
}

function createDataObject(author, content) {
    return {
        author: author,
        content: content
    }
}

function clearInputFields() {
    nameInput.value = '';
    contentInput.value = '';
}
