import { posts } from './endpoints.js';

const getTopics = fetch(posts)
    .then(res => res.json());

export { getTopics };