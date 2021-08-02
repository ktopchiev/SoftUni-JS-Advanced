import { html } from "lit-html";
import authService from "../services/authService";

const registerTemplate = (form) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" @submit=${register()} class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    </div>
`;

function getView(context) {
    let form = {
        register,
    }

    let result = registerTemplate(form);
    context.renderView(result);

    async function register(e) {
        e.preventDefault();

        let form = e.currentTarget;
        let formData = new FormData(form);

        let email = formData.get('email');
        let password = formData.get('password');
        let rePass = formData.get('rePass');

        let response = await authService.register({ email, password });

        context.page.redirect('/dashboard');

    }
}

export default {
    getView,
}