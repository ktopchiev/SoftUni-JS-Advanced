import { render } from "./../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";
import { townsTemplate } from './templates/townsListTemplate.js';
import search from './search.js';

const townsDiv = document.querySelector('#towns');
const button = document.querySelector('button');
button.addEventListener('click', search);

render(townsTemplate(towns), townsDiv);