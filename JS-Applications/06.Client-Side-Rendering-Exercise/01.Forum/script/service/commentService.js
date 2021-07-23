import { comments } from "./endpoints";

const getAllComments = function () {
    return fetch(comments)
        .then(res => res.json());
}

export { getAllComments };