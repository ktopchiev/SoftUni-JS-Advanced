import { html } from "./../../node_modules/lit-html/lit-html.js";

import { memeTemplate } from "./memeTemplate.js";
import memeService from "../services/memeService.js";

const allMemesTemplate = (allMemesData) => html `
    <section id="meme-feed">
        <h1>All Memes</h1>
        <div id="memes">
            ${allMemesData.length !== 0
                ? allMemesData.map(m => html`${memeTemplate(m)}`)
                : html `<p class="no-memes">No memes in database.</p>`
            }
        </div>
    </section>
`;

function getView(context) {
    memeService.getAll().then(data => {
        let templateResult = allMemesTemplate(data);
        context.renderContent(templateResult);
    });
}

export default {
    getView,
}