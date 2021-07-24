import { html } from '../../../node_modules/lit-html/lit-html.js';
import { topicWrapper } from './topicWrapperView.js';

const topicContainer = (topics) => html`
    <div class="topic-container">
        ${topics.map(topic => html`${topicWrapper(topic)}`)}
    </div>
`;

export { topicContainer };