import { html } from "./../../node_modules/lit-html/lit-html.js";

import memeService from "../services/memeService.js";

const buttonsTemplate = (onClickDelete, memeId) => html`
    <a class="button warning" href="/all-memes/edit/${memeId} ">Edit</a>
    <button @click=${onClickDelete} class="button danger">Delete</button>
`;

const memeDetailsTemplate = ({ title, description, imageUrl, _ownerId, _id }, userId, onClick) => html`
    <section id="meme-details">
        <h1>Meme Title: ${title}</h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src="${imageUrl}">
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>
                    ${description}
                </p>
                ${userId === _ownerId ? buttonsTemplate(onClick, _id) : html``}
    
            </div>
        </div>
    </section>
`;

function getView(context) {
    let id = context.params.id;

    memeService.getOne(id)
        .then(data => {
            let userData = context.userData;
            let templateResult = memeDetailsTemplate(data, userData.id, onClickDelete);
            context.renderContent(templateResult);
        });

    function onClickDelete(e) {
        e.preventDefault();

        let confirmed = confirm('Are you sure you want to delete this meme?');

        if (confirmed) {
            memeService.deleteOne(id)
                .then(() => {
                    context.page.redirect('/all-memes');
                })
        }
    }
}

export default {
    getView,
}