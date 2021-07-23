import { html } from '../../../node_modules/lit-html/lit-html.js';

const comment = (commentData) => html`
    <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>${commentData.username}</span> posted on <time>${commentData.time}</time></p>
    
        <p class="post-content">${commentData.content}</p>
    </div>
`;

export { comment };