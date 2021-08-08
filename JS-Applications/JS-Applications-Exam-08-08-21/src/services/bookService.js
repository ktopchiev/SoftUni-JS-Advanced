import api from "./api.js";
import * as request from "./requester.js";

let baseBookUrl = api.booksUrl;

function createBook(title, description, imageUrl, type) {
    return request.post(api.booksUrl, { title, description, imageUrl, type });
}

function getAll() {
    return request.get(`${baseBookUrl}?sortBy=_createdOn%20desc`);
}

function getOne(id) {
    return request.get(`${baseBookUrl}/${id}`);
}

function deleteOne(id) {
    return request.del(`${baseBookUrl}/${id}`);
}

function updateBook(title, description, imageUrl, type, id) {
    return request.put(`${baseBookUrl}/${id}`, { title, description, imageUrl, type });
}

function getOwnBooks(userId) {
    return request.get(`${baseBookUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

function addLike(bookId) {
    return request.post(`${api.likesUrl}`, { bookId });
}

function getAllLikes(bookId) {
    return request.get(`${api.likesUrl}?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
}

function getUserLike(bookId, userId) {
    return request.get(`${api.likesUrl}?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export default {
    createBook,
    getAll,
    getOne,
    deleteOne,
    updateBook,
    getOwnBooks,
    addLike,
    getAllLikes,
    getUserLike,
}