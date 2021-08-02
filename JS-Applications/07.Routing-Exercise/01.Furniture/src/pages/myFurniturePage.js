import authService from "../services/authService.js";
import { html } from "./../../node_modules/lit-html/lit-html.js";
import { getPersonalFurnitures } from './../services/catalogService.js';
import furnitureCardTemplate from "./templates/furnitureCardTemplate.js";

let myFurnitureTemplate = (myFurnitures) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My furnitures</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${myFurnitures.map(f => html`${furnitureCardTemplate(f)}`)}
        </div>
    </div>
`;

async function getView(context) {
    let id = authService.getUserId();
    let data = await getPersonalFurnitures(id);

    let result = myFurnitureTemplate(data);
    context.renderView(result);
}

export default {
    getView,
}