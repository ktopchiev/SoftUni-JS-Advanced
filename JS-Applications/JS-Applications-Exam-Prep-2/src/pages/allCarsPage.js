import { html } from "./../../node_modules/lit-html/lit-html.js";

import { carTemplate } from "./carTemplate.js";
import carsService from "../services/carsService.js";

const allCarsTemplate = (allCarsData) => html `
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">
        ${allCarsData.length !== 0
            ? allCarsData.map(c => html`${carTemplate(c)}`)
            : html `<p class="no-cars">No cars in database.</p>`
        }
        </div>
    </section>
`;

function getView(context) {
    carsService.getAll().then(data => {
        let templateResult = allCarsTemplate(data);
        context.renderContent(templateResult);
    });
}

export default {
    getView,
    allCarsTemplate,
}