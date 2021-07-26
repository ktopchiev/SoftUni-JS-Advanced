import { updateBook } from '../action.js';
import { html } from './../../node_modules/lit-html/lit-html.js';

const editFormView = () => html`
    <form id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input @click=${updateBook} type="submit" value="Save">
        <p class="notification"></p>
    </form>
`;

export { editFormView };