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
    let res = await jsonRequest(catalogUrl, 'Post', data, true);
    return res;
}

export { getAllFurniture, getFurnitureById, postNewFurniture };