import { html } from "./../../node_modules/lit-html/lit-html.js";
import authService from './../services/authService.js';

const loggedUserTemplate = (email) => html`
    <div id="user">
        <span>Welcome, ${email}</span>
        <a class="button" href="/my-books">My Books</a>
        <a class="button" href="/add-book">Add Book</a>
        <a class="button" href="/logout">Logout</a>
    </div>
`;

const guestUserTemplate = () => html`
    <div id="guest">
        <a class="button" href="/login">Login</a>
        <a class="button" href="/register">Register</a>
    </div>
`;

const navigationTemplate = (context) => html`
    <nav class="navbar">
        <section class="navbar-dashboard">
            <a href="/dashboard">Dashboard</a>
            ${authService.isLoggedIn() ? loggedUserTemplate(context.userData.email) : guestUserTemplate()}
        </section>
    </nav>
`;

function getNavTemplate(context, next) {
    context.renderNav(navigationTemplate(context));
    next();
}

export default {
    getNavTemplate
}
