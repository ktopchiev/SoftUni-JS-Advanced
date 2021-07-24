import { html } from "./../../node_modules/lit-html/lit-html.js";
import { catTemplate } from './catTemplate.js';

let catList = (cats) => html`
    <ul>
        ${cats.map(cat => html`${catTemplate(cat)}`)}
    </ul>
`;

export { catList };