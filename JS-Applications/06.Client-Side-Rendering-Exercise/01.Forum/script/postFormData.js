import { createNewTopic } from "./service/topicService.js";

function postFormData(e) {
    e.preventDefault();
    let formData = new FormData(e.target.parentNode.parentNode);
    let time = new Date();
    let data = {
        title: formData.get('topicName'),
        username: formData.get('username'),
        content: formData.get('postText'),
        time
    }

    if (validateData(data)) {
        createNewTopic(data);
        document.getElementById('topicForm').reset();
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

export { postFormData };