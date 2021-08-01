import { jsonRequest } from '../helpers/jsonRequester.js';
import {loginUrl} from './endpoints.js';


async function logIn(user) {
    let response = await jsonRequest(loginUrl, 'Post', user);
    localStorage.setItem('authToken', response.accessToken);
    localStorage.setItem('userId', response._id);
    localStorage.setItem('username', response.username);

    return response;
}

export {
    logIn,
};