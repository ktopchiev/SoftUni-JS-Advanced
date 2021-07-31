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

export { getAllFurniture, getFurnitureById };