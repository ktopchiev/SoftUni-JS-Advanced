import * as request from "./requester.js";
import api from "./api.js";

function isLoggedIn() {
    let data = getUserData();
    if (data.username && data.username !== undefined) {
        return true;
    }

    return false;
}

function getUserData() {
    let id = localStorage.getItem('_id');
    let username = localStorage.getItem('username');
    let accessToken = localStorage.getItem('accessToken');

    return { id, username, accessToken };
}

function saveUserData({ _id, username, accessToken }) {
    localStorage.setItem('_id', _id);
    localStorage.setItem('username', username);
    localStorage.setItem('accessToken', accessToken);
}

function logIn(username, password) {

    return request.post(api.loginUrl, { username, password })
        .then(data => {
            saveUserData(data);
        });
}

function logOut(context) {
    request.get(api.logOutUrl).then(() => {
        localStorage.clear();
        context.page.redirect('/home');
    });
}

function getToken() {
    return localStorage.getItem('accessToken');
}

function register(username, password) {
    return request.post(api.registerUrl, { username, password })
        .then(data => {
            console.log(`register-post-return: ${data}`);
            saveUserData(data);
        });
}

export default {
    isLoggedIn,
    getUserData,
    saveUserData,
    logIn,
    logOut,
    getToken,
    register,
}