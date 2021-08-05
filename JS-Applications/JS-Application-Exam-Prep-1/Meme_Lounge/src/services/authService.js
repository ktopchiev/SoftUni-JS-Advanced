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
    let email = localStorage.getItem('email');
    let id = localStorage.getItem('_id');
    let accessToken = localStorage.getItem('accessToken');

    return { email, id, accessToken };
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
        context.page.redirect('/home');
    })
        .catch(error => console.log(error));
}

function getToken() {
    return localStorage.getItem('accessToken');
}

function register(username, email, password, gender) {
    return request.post(api.registerUrl, { username, email, password, gender })
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