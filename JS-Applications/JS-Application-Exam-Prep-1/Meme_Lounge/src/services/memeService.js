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

export default {
    createMeme,
    getAll,
    getOne,
    deleteOne,
}