import { html } from '../../../node_modules/lit-html/lit-html.js';
import { postFormData } from '../../postFormData.js';

const showForm = html`
    <div class="new-topic-border">
        <div class="header-background">
            <span>New Topic</span>
        </div>
        <form id="topicForm">
            <div class="new-topic-title">
                <label for="topicName">Title <span class="red">*</span></label>
                <input type="text" name="topicName" id="topicName">
            </div>
            <div class="new-topic-title">
                <label for="username">Username <span class="red">*</span></label>
                <input type="text" name="username" id="username">
            </div>
            <div class="new-topic-content">
                <label for="postText">Post <span class="red">*</span></label>
                <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
            </div>
            <div class="new-topic-buttons">
                <button class="cancel">Cancel</button>
                <button @click=${postFormData} class="public">Post</button>
            </div>
    
        </form>
    </div>
`;

export default showForm;