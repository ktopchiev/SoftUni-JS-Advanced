import { html } from "./../../node_modules/lit-html/lit-html.js";
import authService from "../services/authService.js";

const logInTemplate = (form) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${form.onSumbit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password" autocomplete="off">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
    </div>
`;

function getView(context) {

    let form = { onSumbit };
    let template = logInTemplate(form);
    context.renderView(template);

    async function onSumbit(e) {
        e.preventDefault();

        let formElement = e.currentTarget;
        let formData = new FormData(formElement);
        let email = formData.get('email');
        let password = formData.get('password');

        let response = await authService.logIn({ email, password });

        context.page.redirect('/dashboard');
    }
}

export default {
    getView
}