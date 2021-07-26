import { postBook, putBook, getBook, deleteBook, getAllBooks } from './service/bookService.js';
import {render} from './../node_modules/lit-html/lit-html.js';
import { editFormView } from './templates/editFormView.js';
import { tableView } from './templates/tableView.js';
import { addFormView } from './templates/addFormView.js';

async function addBook(e) {
    e.preventDefault();
    let form = e.target.parentNode;
    let formData = new FormData(form);
    let notification = form.querySelector('p.notification');
    let sectionTable = document.querySelector('section#table');

    let dataObj = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    if (!validateData(dataObj)) {
        notification.textContent = 'All fields are required!'
        return;
    } else {
        notification.textContent = '';
    }

    form.reset();
    postBook(dataObj);
    let books = await getAllBooks();
    render(tableView(books), sectionTable);
}

async function editBook(e) {
    e.preventDefault();
    let id = e.target.parentNode.parentNode.id;
    let formDiv = document.getElementById('form');
    let book = await getBook(id);
    render(editFormView(), formDiv);
    let form = formDiv.querySelector('#edit-form');
    form.setAttribute('value', id);
    let titleInput = form.querySelector('input[name="title"]');
    let authorInput = form.querySelector('input[name="author"]');

    titleInput.value = book[0];
    authorInput.value = book[1];
}

async function updateBook(e) {
    e.preventDefault();
    let form = e.target.parentNode;
    let formData = new FormData(form);
    let notification = form.querySelector('p.notification');
    let formDiv = document.querySelector('#form');
    let sectionTable = document.querySelector('#table');
    let id = form.getAttribute('value');
    let dataObj = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    if (!validateData(dataObj)) {
        notification.textContent = 'All fields are required!'
        return;
    } else {
        notification.textContent = '';
    }

    form.reset();
    await putBook(dataObj, id);
    let books = await getAllBooks();
    render(tableView(books), sectionTable);
    render(addFormView(), formDiv);
}

async function removeBook(e) {
    e.preventDefault();
    let id = e.target.parentNode.parentNode.id;
    await deleteBook(id);
    let books = await getAllBooks();
    let sectionTable = document.querySelector('section#table');
    render(tableView(books), sectionTable);
}

function validateData(dataObj) {
    if (dataObj.title === '' || dataObj.author === '') {
        return false;   
    }

    return true;
}

export { addBook, editBook, updateBook, removeBook };