import authService from "../services/authService.js";
import { html } from "./../../node_modules/lit-html/lit-html.js";

const loginTemplate = (onSubmit) => html`
    <section id="login-page" class="login">
        <form @submit=${onSubmit} id="login-form" action="" method="">
            <fieldset>
                <legend>Login Form</legend>
                <p class="field">
                    <label for="email">Email</label>
                    <span class="input">
                        <input type="text" name="email" id="email" placeholder="Email">
                    </span>
                </p>
                <p class="field">
                    <label for="password">Password</label>
                    <span class="input">
                        <input type="password" name="password" id="password" placeholder="Password">
                    </span>
                </p>
                <input class="button submit" type="submit" value="Login">
            </fieldset>
        </form>
    </section>
`;

function getView(context) {

    function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email').trim()
        let password = formData.get('password').trim()

        if (!email && !password) {
            window.alert('All fields are required!');
            return;
        }

        authService.logIn(email, password)
            .then(() => {
                context.page.redirect('/dashboard');
            });
    }

    let templateResult = loginTemplate(onSubmit);
    context.renderContent(templateResult);
}

export default {
    getView
}