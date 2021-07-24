import { render } from '../node_modules/lit-html/lit-html.js';
import { getAllComments } from './service/commentService.js'
import { topicPage } from './templates/pages/topicPageTemplate.js';

let rootDiv = document.getElementsByClassName('root')[0];

const showTopic = () => {
    getAllComments().then(comments => {
        render(topicPage(Object.entries(comments)), rootDiv);
    });
}

export { showTopic };