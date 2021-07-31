import { catalogUrl } from './endpoints.js'

async function getAllFurniture() {
    let furnitureRes = await fetch(catalogUrl);
    let furnitureData = await furnitureRes.json();
    console.log(furnitureData);
    return furnitureData;
}

export { getAllFurniture };