import { render } from "./node_modules/lit-html/lit-html.js";
import { getData } from './service/formData.js';
import { list } from './templates/listTemplate.js';

let form = document.querySelector('form.content');
let root = document.querySelector('#root');

form.addEventListener('submit', renderData);

function renderData(e) {
    e.preventDefault();
    let data = getData(e.currentTarget);
    render(list(data), root);
    form.reset();
}