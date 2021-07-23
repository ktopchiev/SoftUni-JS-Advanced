import { html } from '../../node_modules/lit-html/lit-html.js';


export const topicWrapper = (topicData) => html`
<div class="topic-name-wrapper">
    <div class="topic-name">
        <a href="#" class="normal">
            <h2>${topicData[1].title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${topicData[1].time}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${topicData[1].username}</span></p>
                </div>
            </div>


        </div>
    </div>
</div>`;