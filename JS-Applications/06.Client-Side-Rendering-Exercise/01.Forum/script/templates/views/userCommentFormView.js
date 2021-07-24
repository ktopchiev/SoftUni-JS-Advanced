import { html } from '../../../node_modules/lit-html/lit-html.js';
import { postFormData } from '../../formActions.js';

const commentForm = html`
    <div class="answer-comment">
        <p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form id="commentForm">
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button @click=${postFormData}>Post</button>
            </form>
        </div>
    </div>
`;

export default commentForm;