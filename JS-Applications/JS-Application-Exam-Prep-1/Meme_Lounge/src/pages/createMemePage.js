import { html } from "./../../node_modules/lit-html/lit-html.js";

import memeService from "../services/memeService.js";


const createMemeTemplate = (onSubmit) => html`
    <section id="create-meme">
        <form @submit=${onSubmit} id="create-form">
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                <input type="submit" class="registerbtn button" value="Create Meme">
            </div>
        </form>
    </section>
`;

function getView(context) {
    let templateResult = createMemeTemplate(onSubmit);
    context.renderContent(templateResult);

    function onSubmit(e) {
        e.preventDefault();

        let form = e.currentTarget;
        let formData = new FormData(form);

        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        if (!title || !description || !imageUrl) {
            let notificationsElement = document.querySelector('.notification');
            notificationsElement.querySelector('span').textContent = 'All fields are required';
            notificationsElement.style.display = 'block';
            return;
        }

        memeService.createMeme(title, description, imageUrl)
            .then(() => {
                context.page.redirect('/all-memes');
            });
    }
}

export default {
    getView,
}