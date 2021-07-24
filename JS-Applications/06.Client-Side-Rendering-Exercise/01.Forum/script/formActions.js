import { createNewTopic } from "./service/topicService.js";
import { renderTopics } from './renderTopicContainer.js';

function postFormData(e) {
    e.preventDefault();
    let form = e.target.parentNode.parentNode;
    let formData = new FormData(form);
    let time = new Date();
    let data = {
        title: formData.get('topicName'),
        username: formData.get('username'),
        content: formData.get('postText'),
        time
    }

    if (validateData(data)) {
        createNewTopic(data);
        form.reset();
        let topicTitle = document.querySelector('div.topic-title');
        renderTopics(topicTitle);
    } else {
        return;
    }
}

function validateData(data) {
    if (data.title === '' || data.username === '' || data.content === '') {
        return false;
    }

    return true;
}

function clearForm(e) {
    e.preventDefault();
    e.target.parentNode.parentNode.reset();
}

export { postFormData, clearForm };