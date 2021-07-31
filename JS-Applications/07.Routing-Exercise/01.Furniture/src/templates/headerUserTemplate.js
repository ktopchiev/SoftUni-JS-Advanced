import { html } from "./../../node_modules/lit-html/lit-html.js";

const headerUserTemplate = (user) => html `
    <header>
        <h1><a href="/">Furniture Store</a></h1>
        <nav>
            <a id="catalogLink" href="/" class="active">Dashboard</a>
            <div id="user">
                <a id="createLink" href="create.html" >Create Furniture</a>
                <a id="logoutBtn" href="javascript:void(0)">Logout</a>
            </div>
        </nav>
    </header>
`;

export default headerUserTemplate;