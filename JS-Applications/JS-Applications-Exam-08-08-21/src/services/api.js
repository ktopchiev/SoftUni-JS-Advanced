const baseUrl = 'http://localhost:3030';
const loginUrl = `${baseUrl}/users/login`;
const logOutUrl = `${baseUrl}/users/logout`;
const registerUrl = `${baseUrl}/users/register`;

const likesUrl = `${baseUrl}/data/likes`;
const booksUrl = `${baseUrl}/data/books`;

export default {
    loginUrl,
    logOutUrl,
    registerUrl,
    booksUrl,
    likesUrl,
}