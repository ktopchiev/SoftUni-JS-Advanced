import { html } from "./../../node_modules/lit-html/lit-html.js";

import carsService from "../services/carsService.js";

const buttonsTemplate = (onClickDelete, carId) => html`
    <div class="listings-buttons">
        <a href="/all-listings/edit/${carId}" class="button-list">Edit</a>
        <a href="#" @click=${onClickDelete} class="button-list">Delete</a>
    </div>
`;

const memeDetailsTemplate = ({ brand, model, year, price, description, imageUrl, _ownerId, _id }, userId, onClick) => html`
    <section id="listing-details">
        <h1>Details</h1>
        <div class="details-info">
            <img src="${imageUrl} ">
            <hr>
            <ul class="listing-props">
                <li><span>Brand:</span>${brand} </li>
                <li><span>Model:</span>${model} </li>
                <li><span>Year:</span>${year} </li>
                <li><span>Price:</span>${price} $</li>
            </ul>
    
            <p class="description-para">${description}</p>
            ${userId === _ownerId ? buttonsTemplate(onClick, _id) : html``}
        </div>
    </section>
`;

function getView(context) {
    let id = context.params.id;

    carsService.getOne(id)
        .then(data => {
            let userData = context.userData;
            let templateResult = memeDetailsTemplate(data, userData.id, onClickDelete);
            context.renderContent(templateResult);
        });

    function onClickDelete(e) {
        e.preventDefault();

        let confirmed = confirm('Are you sure you want to delete this car?');

        if (confirmed) {
            carsService.deleteOne(id)
                .then(() => {
                    context.page.redirect('/all-listings');
                })
        }
    }
}

export default {
    getView,
}