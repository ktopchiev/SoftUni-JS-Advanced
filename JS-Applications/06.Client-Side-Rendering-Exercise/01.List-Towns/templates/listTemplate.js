import { html } from '../node_modules/lit-html/lit-html.js';

const list = (towns) => html`
    <ul>
        ${towns.map(town => html`<li>${town}</li>`)}
    </ul>
`;

export { list };