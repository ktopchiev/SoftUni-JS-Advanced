import { html } from "./../../../node_modules/lit-html/lit-html.js";

const headerGuestTemplate = (context) => {
    return html`
        <h1><a href="/">Furniture Store</a></h1>
        <nav>
            <a id="catalogLink" href="/dashboard" class=${setActiveClass(context.path, '/dashboard')}>Dashboard</a>
            <div id="guest">
                <a id="loginLink" href="/login" class=${setActiveClass(context.path, '/login')}>Login</a>
                <a id="registerLink" href="/register" class=${setActiveClass(context.path, '/register')}>Register</a>
            </div>
        </nav>
    `;
}

function setActiveClass(path, href) {
    if (path === href) {
        return 'active';
    } else {
        return '';
    }
}

export default headerGuestTemplate;