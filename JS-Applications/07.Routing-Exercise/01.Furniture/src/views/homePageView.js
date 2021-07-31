import { render } from './../../node_modules/lit-html/lit-html.js';
import headerGuestTemplate from '../templates/headerGuestTemplate.js';
import catalogTemplate from '../templates/catalogTemplate.js';
import { getAllFurniture } from '../../service/catalogService.js';

export default async function(context) {
    let rootDiv = document.querySelector('.root');
    let header = document.querySelector('header');
    let data = await getAllFurniture();
    render(headerGuestTemplate(), header);
    render(catalogTemplate(data), rootDiv);
}
