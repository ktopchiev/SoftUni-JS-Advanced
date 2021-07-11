let baseUrl = 'http://localhost:3030/jsonstore/collections/books';
let createForm = document.querySelector('form.createForm');
let editForm = document.querySelector('form.editForm');
let saveButton = editForm.querySelector('button');
let cancelButton = editForm.querySelector('#cancelBtn');
let resultTable = document.querySelector('table');
let tableBody = resultTable.querySelector('tbody');
let loadButton = document.getElementById('loadBooks');

attachEvents();

function attachEvents() {
    loadButton.addEventListener('click', loadBooks);
    createForm.addEventListener('submit', appendBook);
    saveButton.addEventListener('click', saveEditedRecord);
    cancelButton.addEventListener('click', cancelEdit);
}

function loadBooks() {
    clearStudentsTable();

    fetch(baseUrl)
        .then(response => response.json())
        .then(books => {
            loadTableData(books);
        })
        .catch(error => console.error(error));
}

function appendBook(e) {
    e.preventDefault();

    const inputData = new FormData(e.currentTarget);
    let [title, author] = [
        inputData.get('title').trim(),
        inputData.get('author').trim()
    ];

    //Validate input form
    let hasEmptyFields = inputFormHasEmptyFields(author, title);
    let notification = document.querySelector('form.createForm p.notification');

    if (hasEmptyFields) {
        notification.textContent = 'All fields are required!';
        return;
    } else {
        notification.textContent = '';
    }

    //Create new data object
    const data = createNewDataObject(author, title);

    fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
        .catch(error => console.error(error));

    //Load result into students table and clear input form fields
    loadBooks();
    e.currentTarget.reset();
}

function createNewDataObject(author, title) {
    return {
        author: author,
        title: title
    }
}

function loadTableData(books) {

    for (const [id, book] of Object.entries(books)) {
        let row = tableBody.insertRow();
        row.setAttribute('data_id', id);
        let tableColsLength = resultTable.rows[0].cells.length;
        for (let i = 0; i < tableColsLength; i++) {
            if (i === tableColsLength - 1) {
                let buttonEdit = createButton('Edit', editBookRecord);
                let buttonDelete = createButton('Delete', deleteBookRecord);
                let td = row.insertCell(i);
                td.appendChild(buttonEdit);
                td.appendChild(buttonDelete);
            } else {
                row.insertCell(i).textContent = Object.entries(book)[tableColsLength - 2 - i][1];
            }
        }
    }
}

function deleteBookRecord(e) {
    e.preventDefault();
    let data_id = e.target.parentNode.parentNode.getAttribute('data_id');
    e.target.parentNode.parentNode.remove();
    fetch(`${baseUrl}/${data_id}`, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' }
    })
}

function editBookRecord(e) {
    e.preventDefault();
    showEditForm();

    let data_id = e.target.parentNode.parentNode.getAttribute('data_id');
    editForm.setAttribute('data_id', data_id);

    //Get book for edit data
    fetch(`${baseUrl}/${data_id}`)
        .then(response => response.json())
        .then(book => {
            editForm.querySelector('input[name="title"]').value = book.title;
            editForm.querySelector('input[name="author"]').value = book.author;
        })
        .catch(error => console.error(error));
}

function cancelEdit(e) {
    e.preventDefault();
    showCreateForm();
}

function saveEditedRecord(e) {
    e.preventDefault();
    let data_id = editForm.getAttribute('data_id');
    let editFormData = new FormData(editForm);
    let title = editFormData.get('title');
    let author = editFormData.get('author');

    let data = {
        title,
        author
    }

    //Validate
    if (!validateForm(data.title, data.author)) {
        return;
    };

    fetch(`${baseUrl}/${data_id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
        .catch(error => console.error(error));
    loadBooks();
    showCreateForm();
}

function validateForm(author, title) {
    let hasEmptyFields = inputFormHasEmptyFields(author, title);
    let notification = document.querySelector('form.editForm p.notification');

    if (hasEmptyFields) {
        notification.textContent = 'All fields are required!';
        return false;
    }
    notification.textContent = '';
    return true;
}

function createButton(textContent, event) {
    let button = document.createElement('button');
    button.textContent = textContent;
    button.addEventListener('click', event);
    return button;
}

function clearStudentsTable() {
    while (tableBody.firstChild) {
        tableBody.firstChild.remove();
    }
}

function inputFormHasEmptyFields(...inputFields) {
    return inputFields.includes('');
}

function showCreateForm() {
    createForm.querySelector('p.notification').textContent = '';
    editForm.style.display = 'none';
    editForm.reset();
    createForm.style.display = 'block';
}

function showEditForm() {
    editForm.querySelector('p.notification').textContent = '';
    createForm.style.display = 'none';
    createForm.reset();
    editForm.style.display = 'block';
}