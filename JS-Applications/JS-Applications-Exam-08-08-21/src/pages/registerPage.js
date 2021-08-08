import { html } from "./../../node_modules/lit-html/lit-html.js";

import authService from "../services/authService.js";

const registerTemplate = (onSubmit) => html`
    <section id="register-page" class="register">
        <form @submit=${onSubmit} id="register-form" action="" method="">
            <fieldset>
                <legend>Register Form</legend>
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
                <p class="field">
                    <label for="repeat-pass">Repeat Password</label>
                    <span class="input">
                        <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                    </span>
                </p>
                <input class="button submit" type="submit" value="Register">
            </fieldset>
        </form>
    </section>
`;


function getView(context) {

    function onSubmit(e) {
        e.preventDefault();

        let form = e.currentTarget;
        let formData = new FormData(form);

        let email = formData.get('email');
        let password = formData.get('password');

        if (!email || !password) {
            window.alert('All fields are required!');
            return;
        }

        authService.register(email, password).then(() => {
            context.page.redirect('/dashboard');
        });
    }

    let templateResult = registerTemplate(onSubmit);
    context.renderContent(templateResult);
}

export default {
    getView,
}