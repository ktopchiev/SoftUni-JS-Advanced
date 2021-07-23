import { posts } from './services/endpoints.js';

function getAllTopics() {
    return fetch(posts)
        .then(res => res.json)
        .catch(error => console.error(error));
}

export default {
    getAllTopics
}