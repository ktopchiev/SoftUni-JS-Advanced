import { html } from '../../../node_modules/lit-html/lit-html.js';
import navBar from '../views/navbarView.js';
import { comment } from '../views/postView.js';
import footer from '../views/footerView.js';
import { userComment } from '../views//userCommentView.js';

let topicPage = (commentData) => html`
    <header>
        ${navBar}
    </header>
    
    <!-- homepage -->
    <div class="comment">
        ${comment(commentData)}
        ${commentData.map(comment => html`${userComment(comment)}`)}
    </div>
    <footer>
        ${footer}
    </footer>
`;

export { topicPage };