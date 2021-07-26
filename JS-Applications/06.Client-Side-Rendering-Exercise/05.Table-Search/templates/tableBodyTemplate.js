import { html } from "./../../node_modules/lit-html/lit-html.js";
import { tableRowTemplate } from "./tableRowTemplate.js";

const tableTemplate = (persons) => html`
    
    ${persons.map(person => html`${tableRowTemplate(person)}`)}
    
`;

export { tableTemplate };