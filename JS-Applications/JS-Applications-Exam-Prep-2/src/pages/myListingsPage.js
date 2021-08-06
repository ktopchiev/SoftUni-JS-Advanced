import { html } from "./../../node_modules/lit-html/lit-html.js";

import carsService from "../services/carsService.js";

const myCarTemplate = ({ brand, model, year, imageUrl, price, _id }) => html`
    <div class="listing">
        <div class="preview">
            <img src="${imageUrl}">
        </div>
        <h2>${brand} ${model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${year}</h3>
                <h3>Price: ${price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/all-listings/${_id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
`;

const userCarsListingTemplate = (myCars) => html `
    <section id="my-listings">
        <h1>Car Listings</h1>
        <div class="listings">
        ${myCars.length !== 0
            ? myCars.map(c => html`${myCarTemplate(c)}`)
            : html `<p class="no-cars">You haven't listed any cars yet</p>`
        }
        </div>
    </section>
`;

function getView(context) {
    let userData = context.userData;

    carsService.getOwnCars(userData.id)
        .then(data => {
            let templateResult = userCarsListingTemplate(data);
            context.renderContent(templateResult);
        });
}

export default {
    getView,
}