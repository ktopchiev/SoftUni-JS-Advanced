import { html } from "./../../../node_modules/lit-html/lit-html.js";
import authService from './../../services/authService.js';

const headerTemplate = (context) => {
    return html `
        <h1><a href="/">Furniture Store</a></h1>
        <nav>
            <a id="catalogLink" href="/dashboard" class=${setActiveClass(context.path, '/dashboard')}>Dashboard</a>
            ${authService.isLoggedIn() 
                ? html `
                <div id="user">
                    <a id="createLink" href="/create" class="${setActiveClass(context.path, '/create')}">Create Furniture</a>
                    <a id="profileLink" href="/my-furniture" class="${setActiveClass(context.path, '/my-furniture')}">My Publications</a>
                    <a id="logoutBtn" href="/logout">Logout</a>
                </div>`
                : html `
                <div id="guest">
                    <a id="loginLink" href="/login" class=${setActiveClass(context.path, '/login')}>Login</a>
                    <a id="registerLink" href="/register" class=${setActiveClass(context.path, '/register')}>Register</a>
                </div>`
            }
        </nav>`;
}

function setActiveClass(path, href) {
    if (path === href) {
        return 'active';
    } else {
        return undefined;
    }
}

function getView(context, next) {
    let result = headerTemplate(context);
    context.renderNav(result);
    next();
}

export default {
    getView,
};