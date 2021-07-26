import { html } from "./../../node_modules/lit-html/lit-html.js";
import { tableRowView } from './tableRowView.js';

const tableView = (books) => html`
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${books.map(book => html`${tableRowView(book)}`)}
        </tbody>
    </table>
`;

export { tableView };