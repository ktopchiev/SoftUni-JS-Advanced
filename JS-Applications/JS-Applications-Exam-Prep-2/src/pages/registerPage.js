import { html } from "./../../node_modules/lit-html/lit-html.js";

import authService from "../services/authService.js";

const registerTemplate = (onSubmit) => html`
    <section id="register">
        <div class="container">
            <form @submit=${onSubmit} id="register-form">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
    
                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required>
    
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required>
    
                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                <hr>
    
                <input type="submit" class="registerbtn" value="Register">
            </form>
            <div class="signin">
                <p>Already have an account?
                    <a href="/login">Sign in</a>.
                </p>
            </div>
        </div>
    </section>
`;


function getView(context) {

    function onSubmit(e) {
        e.preventDefault();

        let form = e.currentTarget;
        let formData = new FormData(form);


        let username = formData.get('username');
        let password = formData.get('password');

        if (!username || !password) {
            return;
        }

        authService.register(username, password).then(() => {
            context.page.redirect('/all-listings');
        });
    }

    let templateResult = registerTemplate(onSubmit);
    context.renderContent(templateResult);
}

export default {
    getView,
}