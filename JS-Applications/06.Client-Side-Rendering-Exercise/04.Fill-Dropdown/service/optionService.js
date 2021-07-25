import { optionsData } from "./endpoints.js";


async function loadOptionsData() {

    let optionsResponse = await fetch(optionsData);
    let optionsObj = await optionsResponse.json();
    return optionsObj;
}

export { loadOptionsData };