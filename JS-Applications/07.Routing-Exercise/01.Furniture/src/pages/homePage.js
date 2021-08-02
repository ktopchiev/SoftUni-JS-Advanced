import { getAllFurniture } from "../services/catalogService.js";
import { html } from "./../../../node_modules/lit-html/lit-html.js";
import furnitureCardTemplate from "./templates/furnitureCardTemplate.js";

const catalogTemplate = (furnitureData) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${furnitureData.map(f => html`${furnitureCardTemplate(f)}`)}
        </div>
    </div>
`;

async function getView(context) {
    let allFurniture = await getAllFurniture();
    let result = catalogTemplate(allFurniture);
    context.renderView(result);
}

export default {
    getView,
}