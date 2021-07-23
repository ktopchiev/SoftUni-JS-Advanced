import { html } from '../../../node_modules/lit-html/lit-html.js';

const userComment = (commentData) => html`
    <div id="user-comment">
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${commentData.username}</strong> commented on <time>${commentData.time}</time></p>
                <div class="post-content">
                    <p>${commentData.content}</p>
                </div>
            </div>
        </div>
    </div>
`;

export { userComment };