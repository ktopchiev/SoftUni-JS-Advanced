import { html } from "./../../node_modules/lit-html/lit-html.js";

import carsService from "../services/carsService.js";
import allCarsPage from "./allCarsPage.js";

const userListingsTemplate = (myCars) => html`
    ${allCarsPage.allCarsTemplate(myCars)}
`;

function getView(context) {
    let userData = context.userData;

    carsService.getOwnCars(userData.id)
        .then(data => {
            let templateResult = userListingsTemplate(data);
            context.renderContent(templateResult);
        });
}

export default {
    getView,
}