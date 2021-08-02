import { jsonRequest } from '../helpers/jsonRequester.js';
import { catalogUrl } from './endpoints.js'

async function getAllFurniture() {
    let furnitureRes = await fetch(catalogUrl);
    let furnitureData = await furnitureRes.json();
    return furnitureData;
}

async function getFurnitureById(id) {
    let furnitureRes = await fetch(`${catalogUrl}/${id}`);
    let furnitureData = await furnitureRes.json();
    return furnitureData;
}

async function postNewFurniture(data) {
    let res = await jsonRequest(catalogUrl, 'Post', data, true, true);
    return res;
}

async function getPersonalFurnitures(userId) {
    let res = await jsonRequest(`${catalogUrl}?where=_ownerId%3D%22${userId}%22`);
    return res;
}

async function updateFurniture(data, furnitureId) {
    let res = await jsonRequest(`${catalogUrl}/${furnitureId}`, 'Put', data, true, false);

    return res;
}

async function deleteFurniture(furnitureId) {
    let res = await jsonRequest(`${catalogUrl}/${furnitureId}`, 'Delete', undefined, true, false);

    return res;
}

export {
    getAllFurniture,
    getFurnitureById,
    postNewFurniture,
    getPersonalFurnitures,
    updateFurniture,
    deleteFurniture
};