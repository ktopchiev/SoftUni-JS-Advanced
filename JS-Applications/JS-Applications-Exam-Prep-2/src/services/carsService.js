import api from "./api.js";
import * as request from "./requester.js";

let baseCarsUrl = api.carsUrl;

function createCar(brand, model, description, year, imageUrl, price) {
    return request.post(baseCarsUrl, { brand, model, description, year, imageUrl, price });
}

function getAll() {
    return request.get(`${baseCarsUrl}?sortBy=_createdOn%20desc`);
}

function getOne(id) {
    return request.get(`${baseCarsUrl}/${id}`);
}

function deleteOne(id) {
    return request.del(`${baseCarsUrl}/${id}`);
}

function updateCar(brand, model, description, year, imageUrl, price, id) {
    return request.put(`${baseCarsUrl}/${id}`, { brand, model, description, year, imageUrl, price });
}

function getOwnCars(userId) {
    return request.get(`${baseCarsUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

function search(year) {
    return request.get(`${baseCarsUrl}?where=year%3D${year}`);
}


export default {
    createCar,
    getAll,
    getOne,
    deleteOne,
    updateCar,
    getOwnCars,
    search
}