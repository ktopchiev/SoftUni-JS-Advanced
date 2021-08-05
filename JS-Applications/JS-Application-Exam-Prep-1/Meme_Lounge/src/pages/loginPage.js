import authService from "../services/authService.js";
import { html } from "./../../node_modules/lit-html/lit-html.js";

const loginTemplate = (onSubmit) => html`
    <section id="login">
        <form @submit=${onSubmit} id="login-form">
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn button" value="Login">
                <div class="container signin">
                    <p>Dont have an account?<a href="/sign-up">Sign up</a>.</p>
                </div>
            </div>
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
            let notificationsElement = document.querySelector('.notification');
            notificationsElement.querySelector('span').textContent = 'All fields are required';
            notificationsElement.style.display = 'block';
            return;
        }

        authService.logIn(email, password)
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