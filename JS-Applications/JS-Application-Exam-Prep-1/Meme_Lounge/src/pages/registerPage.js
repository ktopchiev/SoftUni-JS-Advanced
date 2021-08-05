import { html } from "./../../node_modules/lit-html/lit-html.js";

import authService from "../services/authService.js";

const registerTemplate = (onSubmit) => html`
    <section id="register">
        <form @submit=${onSubmit} id="register-form">
            <div class="container">
                <h1>Register</h1>
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Enter Username" name="username">
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Enter Email" name="email">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <label for="repeatPass">Repeat Password</label>
                <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                <div class="gender">
                    <input type="radio" name="gender" id="female" value="female">
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="male" value="male" checked>
                    <label for="male">Male</label>
                </div>
                <input type="submit" class="registerbtn button" value="Register">
                <div class="container signin">
                    <p>Already have an account?<a href="/login">Sign in</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;


function getView(context) {

    function onSubmit(e) {
        e.preventDefault();

        let form = e.currentTarget;
        let formData = new FormData(form);


        let username = formData.get('username');
        let email = formData.get('email');
        let password = formData.get('password');
        let gender = formData.get('gender');

        if (!username || !email || !password || !gender) {
            let notificationsElement = document.querySelector('.notification');
            notificationsElement.querySelector('span').textContent = 'All fields are required';
            notificationsElement.style.display = 'block';
            return;
        }

        authService.register(username, email, password, gender).then(() => {
            context.page.redirect('/all-memes');
        });
    }

    let templateResult = registerTemplate(onSubmit);
    context.renderContent(templateResult);
}

export default {
    getView,
}