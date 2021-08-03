import { postNewFurniture } from "../services/catalogService.js";
import { html } from "./../../node_modules/lit-html/lit-html.js";

let createTemplate = (form) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${form.createFurniture}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control ${form.validationFields.make}" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control ${form.validationFields.model}" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control ${form.validationFields.year}" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control ${form.validationFields.description}" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control ${form.validationFields.price}" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control ${form.validationFields.image}" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control ${form.validationFields.material}" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
    </div>
`;

function getView(context) {
    let formObj = {
        validationFields: {
            make: "initial",
            model: "initial",
            year: "initial",
            description: "initial",
            price: "initial",
            image: "initial",
            material: "initial"
        },
        createFurniture,
    }

    let result = createTemplate(formObj);
    context.renderView(result);

    async function createFurniture(e) {
        e.preventDefault();

        let form = e.currentTarget;
        let formData = new FormData(form);

        let data = {
            make: formData.get('make'),
            model: formData.get('model'),
            year: formData.get('year'),
            description: formData.get('description'),
            price: formData.get('price'),
            image: formData.get('img'),
            material: formData.get('material')
        }

        let validationFields = validate(data, formObj);
        if (Object.values(validationFields).some(field => field === "is-invalid")) {
            let result = createTemplate(formObj);
            return context.renderView(result);
        }

        let response = await postNewFurniture(data);

        context.page.redirect('/dashboard');
    }
}

function validate(data, formObj) {

    if (data.make.length >= 4) {
        formObj.validationFields.make = "is-valid";
    } else {
        formObj.validationFields.make = "is-invalid";
    }

    if (data.model.length >= 4) {
        formObj.validationFields.model = "is-valid";
    } else {
        formObj.validationFields.model = "is-invalid";
    }

    if (data.year >= 1950 && data.year <= 2050 ) {
        formObj.validationFields.year = "is-valid";
    } else {
        formObj.validationFields.year = "is-invalid";
    }

    if (data.description > 10) {
        formObj.validationFields.description = "is-valid";
    } else {
        formObj.validationFields.description = "is-invalid";
    }

    if (Number(data.price) > 0) {
        formObj.validationFields.price = "is-valid";
    } else {
        formObj.validationFields.price = "is-invalid";
    }

    if (data.image !== '') {
        formObj.validationFields.image = "is-valid";
    } else {
        formObj.validationFields.image = "is-invalid";
    }

    if (data.material) {
        
    }

    return formObj.validationFields;
}

export default { getView };