import { html } from "./../../node_modules/lit-html/lit-html.js";
import authService from './../services/authService.js';

const loggedUserTemplate = (email) => html`
    <div class="user">
        <a href="/create">Create Meme</a>
        <div class="profile">
            <span>Welcome, ${email}</span>
            <a href="/my-profile">My Profile</a>
            <a href="/logout">Logout</a>
        </div>
    </div>
`;

const guestUserTemplate = () => html`
    <div class="guest">
        <div class="profile">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
        <a class="active" href="/home">Home Page</a>
    </div>
`;

const navigationTemplate = (context) => html`
    <nav>
        <a href="/all-memes">All Memes</a>
        <!-- Logged users -->
        ${authService.isLoggedIn() ? loggedUserTemplate(context.userData.email) : guestUserTemplate()}
        <!-- Guest users -->
    </nav>
`;

function getNavTemplate(context, next) {
    context.renderNav(navigationTemplate(context));
    next();
}

export default {
    getNavTemplate
}
