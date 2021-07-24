import { render } from "./../node_modules/lit-html/lit-html.js";
import { catList } from './templates/listTemplate.js';
import { cats } from './catSeeder.js';

let allCatsSection = document.querySelector('#allCats');

render(catList(cats), allCatsSection);