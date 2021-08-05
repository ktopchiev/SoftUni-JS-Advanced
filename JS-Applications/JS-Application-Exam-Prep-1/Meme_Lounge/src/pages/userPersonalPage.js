import memeService from "../services/memeService.js";
import { html } from "./../../node_modules/lit-html/lit-html.js";

const userMemeTemplate = ({ title, imageUrl, _id }) => html`
    <div class="user-meme">
        <p class="user-meme-title">${title}</p>
        <img class="userProfileImage" alt="meme-img" src="${imageUrl}">
        <a class="button" href="/my-profile/${_id}">Details</a>
    </div>
`;

const userPersonalTemplate = ({ username, email, gender }, memes) => html`
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src="${`/images/${gender}.png`}">
            <div class="user-content">
                <p>Username: ${username} </p>
                <p>Email: ${email} </p>
                <p>My memes count: ${memes.length}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">
        ${memes.length !== 0
            ? memes.map(m => html`${userMemeTemplate(m)}`)
            : html `<p class="no-memes">No memes in database.</p>`
        }
        </div>
    </section>
`;

function getView(context) {
    let userData = context.userData;

    memeService.getOwnMemes(userData.id)
        .then(data => {
            let templateResult = userPersonalTemplate(userData, data);
            context.renderContent(templateResult);
        });
}

export default {
    getView,
}