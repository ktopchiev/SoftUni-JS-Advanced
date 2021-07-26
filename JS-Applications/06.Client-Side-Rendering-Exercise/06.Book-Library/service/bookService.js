import { booksUrl } from './endpoints.js';

async function getAllBooks() {
    let booksResponse = await fetch(booksUrl);
    let booksObj = await booksResponse.json();
    return Object.values(booksObj);
}

async function getBook(id) {
    console.log(id);
    let bookRes = await fetch(`${booksUrl}/${id}`);
    let book = await bookRes.json();

    return Object.values(book);
}

async function postBook(dataObj) {
    let postBookRes = await fetch(booksUrl, {
        method: 'Post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(dataObj)
    });

    return postBookRes;
}

async function putBook(dataObj, id) {
    let putBookRes = await fetch(`${booksUrl}/${id}`, {
        method: 'Put',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(dataObj)
    });

    return putBookRes;
}

async function deleteBook(id) {
    let deleteBookRes = await fetch(`${booksUrl}/${id}`, {
        method: 'Delete',
        headers: { 'Content-type': 'application/json'}
    });

    return deleteBookRes;
}

export { getAllBooks, getBook, postBook, putBook, deleteBook };