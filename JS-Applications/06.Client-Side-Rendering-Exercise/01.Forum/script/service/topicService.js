import { posts } from './endpoints.js';

const getAllTopics = function () {
    return fetch(posts)
        .then(res => res.json());
}

const getTopicById = (id) => {
    return fetch(`${posts}/${id}`)
        .then(res => res.json());
}

const createNewTopic = function (data) {
    fetch(posts, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
}

export {
    getAllTopics,
    createNewTopic,
    getTopicById
};