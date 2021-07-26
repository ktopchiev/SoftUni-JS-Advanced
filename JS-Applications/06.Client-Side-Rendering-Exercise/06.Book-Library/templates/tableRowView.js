import { html } from "./../../node_modules/lit-html/lit-html.js";
import { editBook, removeBook } from './../action.js';
import { ifDefined } from './../../node_modules/lit-html/directives/if-defined.js';

const tableRowView = (book) => html`
    <tr id="${ifDefined(book._id)}">
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button @click=${editBook}>Edit</button>
            <button @click=${removeBook}>Delete</button>
        </td>
    </tr>
`;

export { tableRowView };