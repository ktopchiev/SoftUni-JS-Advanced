import * as request from "./requester.js";
import api from "./api.js";

function isLoggedIn() {
    let data = getUserData();
    if (data.email && data.email !== undefined) {
        return true;
    }

    return false;
}

function getUserData() {
    let id = localStorage.getItem('_id');
    let username = localStorage.getItem('username');
    let email = localStorage.getItem('email');
    let accessToken = localStorage.getItem('accessToken');
    let gender = localStorage.getItem('gender');

    return { id, username, email, accessToken, gender };
}

function saveUserData({ _id, username, email, accessToken, gender }) {
    localStorage.setItem('_id', _id);
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('gender', gender);
}

function logIn(email, password) {

    return request.post(api.loginUrl, { email, password })
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

function register(username, email, password, gender) {
    return request.post(api.registerUrl, { username, email, password, gender })
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