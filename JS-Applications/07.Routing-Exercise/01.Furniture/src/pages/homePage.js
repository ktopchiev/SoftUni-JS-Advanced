import headerTemplate from './templates/headerTemplate.js';
import catalogTemplate from './templates/catalogTemplate.js';
import { getAllFurniture } from '../services/catalogService.js';
import renderer from "../middleware/renderer.js";

export default async function(context) {
    let data = await getAllFurniture();
    renderer.renderNav(headerTemplate(context));
    renderer.renderView(catalogTemplate(data));
}
