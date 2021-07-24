import { comments } from "./endpoints.js";

const getAllComments = function () {
    return fetch(comments)
        .then(res => res.json());
}

const createNewComment = function (data) {
    fetch(posts, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
}

export { getAllComments };