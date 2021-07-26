import { render } from './../node_modules/lit-html/lit-html.js';
import { getAllBooks } from './service/bookService.js';
import { tableView } from './templates/tableView.js';
import { addFormView } from './templates/addFormView.js';

let loadButton = document.querySelector('#loadBooks');
let tableSection = document.querySelector('#table');
let formDiv = document.getElementById('form');
let books = [];

loadButton.addEventListener('click', loadBooks);

async function loadBooks(e) {
    e.preventDefault();
    books = await getAllBooks();
    render(tableView(books), tableSection);
    render(addFormView(), formDiv);
}

render(tableView(books), tableSection);
