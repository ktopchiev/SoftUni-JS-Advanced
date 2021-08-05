import api from "./api.js";
import * as request from "./requester.js";

let baseMemeUrl = api.memesUrl;

function createMeme(title, descritpion, imageUrl) {
    return request.post(api.memesUrl, { title, descritpion, imageUrl });
}

function getAll() {
    return request.get(`${baseMemeUrl}/?sortBy=_createdOn%20desc`);
}

function getOne(id) {
    return request.get(`${baseMemeUrl}/${id}`);
}

function deleteOne(id) {
    return request.del(`${baseMemeUrl}/${id}`);
}

function updateMeme(title, description, imageUrl, id) {
    return request.put(`${baseMemeUrl}/${id}`, { title, description, imageUrl });
}

function getOwnMemes(userId) {
    return request.get(`${baseMemeUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export default {
    createMeme,
    getAll,
    getOne,
    deleteOne,
    updateMeme,
    getOwnMemes,
}