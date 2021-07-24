import { render } from '../node_modules/lit-html/lit-html.js';
import { topicContainer } from './templates/views/topicContainerView.js';
import { getAllTopics } from './service/topicService.js'

const renderTopics = (container) => {

    getAllTopics().then(topics => {
        render(topicContainer(Object.entries(topics)), container);
    });
}

export { renderTopics }