import { render } from "./../node_modules/lit-html/lit-html.js";
import { loadOptionsData } from "./service/optionService.js";
import { selectMenuTemplate } from "./templates/selectMenuTemplate.js";
import { optionsData } from "./service/endpoints.js";

const dropdownMenuDiv = document.querySelector('#dropdownMenu');
let form = document.querySelector('form');
form.addEventListener('submit', addItem);

loadOptions();

async function loadOptions() {
    let newOptions = await loadOptionsData();
    render(selectMenuTemplate(Object.entries(newOptions)), dropdownMenuDiv);
}

async function addItem(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let text = formData.get('text');

    let createResponse = await fetch(optionsData, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ text })
    });

    if (createResponse.ok) {
        await loadOptions();
        form.reset();
    }
}