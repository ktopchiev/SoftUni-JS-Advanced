import { jsonRequest } from '../helpers/jsonRequester.js';
import { loginUrl, logoutUrl, registerUrl } from './endpoints.js';


async function logIn(user) {
    let response = await jsonRequest(loginUrl, 'Post', user, true, false);
    localStorageSet(response);
    return response;
}

function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

function getAuthToken() {
    return localStorage.getItem('authToken');
}

async function logOut() {
    await jsonRequest(logoutUrl, 'Get', undefined, true, true);
    localStorage.clear();
}

async function register(userdata) {
    let response = await jsonRequest(registerUrl, 'Post', userdata, false, false);
    console.log(response);
    localStorageSet(response);

    return response;
}

function localStorageSet(response) {
    localStorage.setItem('authToken', response.accessToken);
    localStorage.setItem('userId', response._id);
    localStorage.setItem('username', response.username);
}

export default {
    logIn,
    isLoggedIn,
    getAuthToken,
    logOut,
    register,

};