import { html } from "../../node_modules/lit-html/lit-html.js";
import carsService from "../services/carsService.js";

const editCarTemplate = ({ brand, model, description, year, imageUrl, price }, onSubmit) => html`
    <section id="edit-listing">
        <div class="container">
    
            <form @submit=${onSubmit} id="edit-form">
                <h1>Edit Car Listing</h1>
                <p>Please fill in this form to edit an listing.</p>
                <hr>
    
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand" value="${brand}">
    
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model" value="${model}">
    
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description" value="${description}">
    
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year" value="${year}">
    
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${imageUrl}">
    
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" value="${price}">
    
                <hr>
                <input type="submit" class="registerbtn" value="Edit Listing">
            </form>
        </div>
    </section>
`;

function getView(context) {
    let carId = context.params.id;

    carsService.getOne(carId)
        .then(data => {
            let templateResult = editCarTemplate(data, onSubmit);
            context.renderContent(templateResult);
        });

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

        carsService.updateCar(brand, model, description, year, imageUrl, price, carId)
            .then(() => {
                context.page.redirect(`/all-listings/${carId}`);
            });
    }
}

export default {
    getView,
}