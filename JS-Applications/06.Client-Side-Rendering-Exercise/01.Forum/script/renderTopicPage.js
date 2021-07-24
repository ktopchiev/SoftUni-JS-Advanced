import { render } from '../node_modules/lit-html/lit-html.js';
import { getAllComments } from './service/commentService.js'
import { getTopicById } from './service/topicService.js';
import { topicPage } from './templates/pages/topicPageTemplate.js';

let rootDiv = document.getElementsByClassName('root')[0];

const showTopic = (id) => {

    getAllComments().then(comments => {
        let commentsArr = [];
        for (const key in comments) {
            if (comments[key].topicId === id) {
                commentsArr.push(comments[key]);
            }
        }

        getTopicById(id).then(topic => {
            render(topicPage(topic, commentsArr), rootDiv);
        })
    });
}

export { showTopic };