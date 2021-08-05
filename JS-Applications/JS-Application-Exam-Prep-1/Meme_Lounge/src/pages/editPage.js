import { html } from "../../node_modules/lit-html/lit-html.js";
import memeService from "../services/memeService.js";

const editMemeTemplate = ({ title, description, imageUrl }, onSubmit) => html`
    <section id="edit-meme">
        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Meme</h1>
            <div class="container">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" value="${title}">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description">${description}</textarea>
                <label for="imageUrl">Image Url</label>
                <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value="${imageUrl}">
                <input type="submit" class="registerbtn button" value="Edit Meme">
            </div>
        </form>
    </section>
`;

function getView(context) {
    let memeId = context.params.id;

    memeService.getOne(memeId)
        .then(data => {
            let templateResult = editMemeTemplate(data, onSubmit);
            context.renderContent(templateResult);
        });

    function onSubmit(e) {
        e.preventDefault();

        let form = e.currentTarget;
        let formData = new FormData(form);

        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        memeService.updateMeme(title, description, imageUrl, memeId)
            .then(() => {
                context.page.redirect(`/all-memes/${memeId}`);
            });
    }
}

export default {
    getView,
}