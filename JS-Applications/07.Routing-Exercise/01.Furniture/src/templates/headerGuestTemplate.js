import { html } from "./../../node_modules/lit-html/lit-html.js";

const headerGuestTemplate = () => html`
    <h1><a href="/">Furniture Store</a></h1>
    <nav>
        <a id="catalogLink" href="/" class="active">Dashboard</a>
        <div id="guest">
            <a id="loginLink" href="/login">Login</a>
            <a id="registerLink" href="/register">Register</a>
        </div>
    </nav>
`;

export default headerGuestTemplate;