import { html } from "./../../node_modules/lit-html/lit-html.js";

const memeTemplate = ({ title, imageUrl, _id }) => html`
    <div class="meme">
        <div class="card">
            <div class="info">
                <p class="meme-title">${title} </p>
                <img class="meme-image" alt="meme-img" src="${imageUrl}">
            </div>
            <div id="data-buttons">
                <a class="button" href="/all-memes/${_id}">Details</a>
            </div>
        </div>
    </div>
`;

export {
    memeTemplate,
}