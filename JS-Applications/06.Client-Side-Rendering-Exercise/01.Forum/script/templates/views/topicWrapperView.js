import { html } from '../../../node_modules/lit-html/lit-html.js';
import { showTopic } from '../../renderTopicPage.js';


export const topicWrapper = (topicData) => html`
<div class="topic-name-wrapper" id="${topicData[1]._id}">
    <div class="topic-name">
        <a @click=${showTopic(topicData[1]._id)} href="#" class="normal">
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