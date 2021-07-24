import { posts } from './endpoints.js';

const getAllTopics = function () {
    return fetch(posts)
        .then(res => res.json());
}

const getTopicById = async (id) => {
    let postData =  await fetch(`${posts}/${id}`);
    let post = await postData.json();
    return post;
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