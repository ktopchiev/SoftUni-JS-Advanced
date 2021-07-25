import { html } from "./../../node_modules/lit-html/lit-html.js";
import { optionTemplate } from "./optionTemplate.js";

const selectMenuTemplate = (options) => html`
    <select id="menu">
        ${options.map(option => html`${optionTemplate(option[1])}`)}
    </select>
`;

export { selectMenuTemplate };