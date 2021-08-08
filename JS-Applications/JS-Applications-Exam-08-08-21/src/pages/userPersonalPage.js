import { html } from "./../../node_modules/lit-html/lit-html.js";
import bookService from "../services/bookService.js";

const userBookTemplate = ({ title, type, imageUrl, _id }) => html`
    <li class="otherBooks">
        <h3>${title}</h3>
        <p>Type: ${type}</p>
        <p class="img"><img src="${imageUrl}"></p>
        <a class="button" href="/my-books/${_id}">Details</a>
    </li>
`;

const userPersonalTemplate = (books) => html`
    <section id="my-books-page" class="my-books">
        <h1>My Books</h1>
        <!-- Display ul: with list-items for every user's books (if any) -->
        ${books.length !== 0
            ? html`<ul class="my-books-list">
                ${books.map(b => html`${userBookTemplate(b)}`)}
            </ul>`
            : html `<li class="no-books">No books in database!</li>`
        }
        </ul>
    </section>
`;

function getView(context) {
    let userData = context.userData;
    
    bookService.getOwnBooks(userData.id)
        .then(data => {
            let templateResult = userPersonalTemplate(data);
            context.renderContent(templateResult);
        });
}

export default {
    getView,
}