import { html } from "./../../node_modules/lit-html/lit-html.js";

const optionTemplate = (option) => html`
    <option .value=${option._id}>${option.text}</option>
`;

export { optionTemplate };