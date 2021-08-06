import { html } from "./../../node_modules/lit-html/lit-html.js";

import authService from "../services/authService.js";

const loginTemplate = (onSubmit) => html`
    <section id="login">
        <div class="container">
            <form @submit=${onSubmit} id="login-form" action="#" method="post">
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr>
    
                <p>Username</p>
                <input placeholder="Enter Username" name="username" type="text">
    
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn" value="Login">
            </form>
            <div class="signin">
                <p>Dont have an account?
                    <a href="/register">Sign up</a>.
                </p>
            </div>
        </div>
    </section>
`;

function getView(context) {

    function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let username = formData.get('username').trim()
        let password = formData.get('password').trim()

        if (!username && !password) {
            return;
        }

        authService.logIn(username, password)
            .then(() => {
                context.page.redirect('/home');
            });
    }

    let templateResult = loginTemplate(onSubmit);
    context.renderContent(templateResult);
}

export default {
    getView
}