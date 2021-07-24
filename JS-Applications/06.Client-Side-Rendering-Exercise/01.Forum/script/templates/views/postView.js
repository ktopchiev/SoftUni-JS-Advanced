import { html } from '../../../node_modules/lit-html/lit-html.js';

const topicHeader = (commentData) => html`
    <div class="header" id="${commentData._id}">
        <img src="./static/profile.png" alt="avatar">
        <p><span>${commentData.username}</span> posted on <time>${commentData.time}</time></p>
    
        <p class="post-content">${commentData.content}</p>
    </div>
`;

export { topicHeader };