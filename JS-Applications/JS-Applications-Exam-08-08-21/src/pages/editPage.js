import { html } from "../../node_modules/lit-html/lit-html.js";
import bookService from "../services/bookService.js";

const editBookTemplate = ({ title, description, imageUrl, type }, onSubmit) => html`
    <section id="edit-page" class="edit">
        <form @submit=${onSubmit} id="edit-form" action="#" method="">
            <fieldset>
                <legend>Edit my Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                        <input type="text" name="title" id="title" value="${title}">
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea name="description"
                            id="description">${description}</textarea>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="imageUrl" id="image" value="${imageUrl}">
                    </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                        <select id="type" name="type" value="${type}">
                            <option value="Fiction" selected>${type}</option>
                            <option value="Romance">Romance</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Classic">Clasic</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                </p>
                <input class="button submit" type="submit" value="Save">
            </fieldset>
        </form>
    </section>
`;

function getView(context) {
    let bookId = context.params.id;

    bookService.getOne(bookId)
        .then(data => {
            let templateResult = editBookTemplate(data, onSubmit);
            context.renderContent(templateResult);
        });

    function onSubmit(e) {
        e.preventDefault();

        let form = e.currentTarget;
        let formData = new FormData(form);

        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        if (!title || !description || !imageUrl || !type) {
            window.alert('All fields are required!');
            return;
        }

        bookService.updateBook(title, description, imageUrl, type, bookId)
            .then(() => {
                context.page.redirect(`/dashboard/${bookId}`);
            });
    }
}

export default {
    getView,
}