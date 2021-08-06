import { html } from "./../../node_modules/lit-html/lit-html.js";

import authService from './../services/authService.js';

const loggedUserTemplate = (username, path) => html`
    <div id="profile">
        <a>Welcome ${username} </a>
        <a href="/my-listings" class=${setActivity(path, '/my-listings')}>My Listings</a>
        <a href="/create" class=${setActivity(path, '/create')}>Create Listing</a>
        <a href="/logout" class=${setActivity(path, '/logout')}>Logout</a>
    </div>
`;

const guestUserTemplate = (path) => html`
    <div id="guest">
        <a href="/login" class=${setActivity(path, '/login')}>Login</a>
        <a href="/register" class=${setActivity(path, '/register')}>Register</a>
    </div>
`;

const navigationTemplate = (context) => html`
    <nav>
        <a href="/home" class=${setActivity(context.path, '/home')}>Home</a>
        <a href="/all-listings" class=${setActivity(context.path, '/all-listings')}>All Listings</a>
        <a href="/by-year" class=${setActivity(context.path, '/by-year')}>By Year</a>
        ${authService.isLoggedIn() ? loggedUserTemplate(context.userData.username, context.path) : guestUserTemplate(context.path)}
    </nav>
`;

function setActivity(path, href) {
    if (path === href) {
        return 'active';
    } else {
        return undefined;
    }
}

function getNavTemplate(context, next) {
    context.renderNav(navigationTemplate(context));
    next();
}

export default {
    getNavTemplate
}
