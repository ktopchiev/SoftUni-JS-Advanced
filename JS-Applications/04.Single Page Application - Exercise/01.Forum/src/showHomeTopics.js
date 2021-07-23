import createTopicElement from './createTopicElement.js';
import getAllTopics from './services/homeTopicService.js';

function showHomeTopics() {

    let fragment = new DocumentFragment();
    let homePageTopics = document.querySelector('#home-page-topics');

    let data = getAllTopics();

    homePageTopics.textContent = '';
    for (const topic in data) {
        console.log(data[topic]._id);
        let newElement = createTopicElement(data[topic], data[topic]._id);
        fragment.appendChild(newElement);
    }
    homePageTopics.appendChild(fragment);
    homePageTopics.classList.remove('hidden');
}

export default {
    showHomeTopics
}