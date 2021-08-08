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
    let email = localStorage.getItem('email');
    let accessToken = localStorage.getItem('accessToken');

    return { id, email, accessToken };
}

function saveUserData({ _id, email, accessToken }) {
    localStorage.setItem('_id', _id);
    localStorage.setItem('email', email);
    localStorage.setItem('accessToken', accessToken);
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
        context.page.redirect('/dashboard');
    });
}

function getToken() {
    return localStorage.getItem('accessToken');
}

function register(email, password) {
    return request.post(api.registerUrl, {email, password})
        .then(data => {

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