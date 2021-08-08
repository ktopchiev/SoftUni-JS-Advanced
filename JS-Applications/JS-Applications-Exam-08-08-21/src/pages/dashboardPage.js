import { html } from "./../../node_modules/lit-html/lit-html.js";

import { bookTemplate } from "./bookTemplate.js";
import bookService from "../services/bookService.js";

const dashboardTemplate = (allBooksData) => html `
    <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
                ${allBooksData.length !== 0
                    ? html`<ul class="other-books-list">
                        ${allBooksData.map(b => html`${bookTemplate(b)}`)}
                    </ul>`
                    : html `<li class="no-books">No books in database!</li>`
                }
            </ul>
        </section>
`;

function getView(context) {
    bookService.getAll().then(data => {
        let templateResult = dashboardTemplate(data);
        context.renderContent(templateResult);
    });
}

export default {
    getView,
}