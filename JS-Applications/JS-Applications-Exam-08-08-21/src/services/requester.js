import authService from "./authService.js";

function request(method, url, data) {
    let options = {};

    if (method !== 'GET') {
        options.method = method;
        options.headers = { 'Content-type': 'application/json' };
        options.body = JSON.stringify(data);
    }

    if (authService.isLoggedIn()) {
        options.headers = {
            'Content-type': 'application/json',
            'X-Authorization': authService.getToken(),
        }
    }

    if (url.includes('/logout')) {
        return fetch(url, options);
    }

    return fetch(url, options).then(res => res.json());
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const del = request.bind(null, 'DELETE');
export const update = request.bind(null, 'PATCH');
export const put = request.bind(null, 'PUT');