import { html } from "./../../node_modules/lit-html/lit-html.js";

const bookTemplate = ({ title, type, imageUrl, _id }) => html`
    <li class="otherBooks">
        <h3>${title}</h3>
        <p>Type: ${type}</p>
        <p class="img"><img src="${imageUrl}"></p>
        <a class="button" href="/dashboard/${_id}">Details</a>
    </li>
`;

export {
    bookTemplate,
}