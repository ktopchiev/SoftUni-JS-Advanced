import createTopicElement from './createTopic.js';

export default function showHomeTopics() {
    let topicsUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    let fragment = new DocumentFragment();
    let homePageTopics = document.querySelector('#home-page-topics');

    fetch(topicsUrl)
        .then(res => res.json())
        .then(data => {
            homePageTopics.textContent = '';
            for (const topic in data) {
                console.log(data[topic]._id);
                let newElement = createTopicElement(data[topic], data[topic]._id);
                fragment.appendChild(newElement);
            }
            homePageTopics.appendChild(fragment);
            homePageTopics.classList.remove('hidden');
        })
        .catch(error => console.error(error));
}
