import { getFurnitureById } from "../services/catalogService.js";
import { updateFurniture } from "../services/catalogService.js";
import { html } from "./../../node_modules/lit-html/lit-html.js";

let editTemplate = (furnitureData, form) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${form.onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="${furnitureData.make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model"
                            value="${furnitureData.model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year"
                            value="${furnitureData.year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description"
                            value="${furnitureData.description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="${furnitureData.price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="${furnitureData.image}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${furnitureData.material}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
    </div>
`;

async function getView(context) {
    let form = { onSubmit };
    let furnitureId = context.params.id;
    let data = await getFurnitureById(furnitureId);
    let result = editTemplate(data, form);
    context.renderView(result);

    async function onSubmit(e) {
        e.preventDefault();

        let form = e.currentTarget;
        let formData = new FormData(form);

        let make = formData.get('make');
        let model = formData.get('model');
        let year = formData.get('year');
        let description = formData.get('description');
        let price = formData.get('price');
        let image = formData.get('img');
        let material = formData.get('material');

        let response = await updateFurniture({make, model, year, description, price, image, material}, furnitureId);
        context.page.redirect(`/details/${furnitureId}`);
    }
}

export default { getView };