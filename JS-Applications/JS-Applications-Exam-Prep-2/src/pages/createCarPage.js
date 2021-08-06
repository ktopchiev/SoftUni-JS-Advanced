import { html } from "./../../node_modules/lit-html/lit-html.js";

import carsService from "../services/carsService.js";


const createCarTemplate = (onSubmit) => html`
    <section id="create-listing">
        <div class="container">
            <form @submit=${onSubmit} id="create-form">
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr>
    
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand">
    
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model">
    
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description">
    
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year">
    
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl">
    
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price">
    
                <hr>
                <input type="submit" class="registerbtn" value="Create Listing">
            </form>
        </div>
    </section>
`;

function getView(context) {
    let templateResult = createCarTemplate(onSubmit);
    context.renderContent(templateResult);

    function onSubmit(e) {
        e.preventDefault();

        let form = e.currentTarget;
        let formData = new FormData(form);

        let brand = formData.get('brand');
        let model = formData.get('model');
        let description = formData.get('description');
        let year = formData.get('year');
        let imageUrl = formData.get('imageUrl');
        let price = formData.get('price');

        if (!brand || !model || !description || !year || !imageUrl || !price) {

            return;
        }

        carsService.createCar(brand, model, description, year, imageUrl, price)
            .then(() => {
                context.page.redirect('/all-listings');
            });
    }
}

export default {
    getView,
}