import { createNewTopic } from "./service/topicService.js";
import { renderTopics } from './renderTopicContainer.js';
import { createNewComment } from './service/commentService.js';
import { showTopic } from "./renderTopicPage.js";

function postFormData(e) {
    e.preventDefault();
    let form = e.target.parentNode.parentNode;
    let formData = new FormData(form);
    let time = new Date();
    let topicTitle = document.querySelector('div.topic-title');

    if (form.id === 'topicForm') {
        let data = {
            title: formData.get('topicName'),
            username: formData.get('username'),
            content: formData.get('postText'),
            time
        }

        if (validateData(data)) {
            createNewTopic(data);
            form.reset();
            renderTopics(topicTitle);
        } else {
            return;
        }
    } else if (form.id === 'commentForm') {
        let data = {
            username: formData.get('username'),
            content: formData.get('postText'),
            topicId,
            time
        }

        if (validateData(data)) {
            createNewComment(data);
            form.reset();
            showTopic();
        }
    }




}

function validateData(data) {
    for (const key in data) {
        if (data[key] === '') {
            return false;
        }
    }

    return true;
}

function clearForm(e) {
    e.preventDefault();
    e.target.parentNode.parentNode.reset();
}

export { postFormData, clearForm };