import authService from './../services/authService.js';

function getUserData(context, next) {
    context.userData = authService.getUserData();
    next();
}

export default {
    getUserData,
}