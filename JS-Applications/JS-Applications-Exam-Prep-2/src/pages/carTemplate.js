import { html } from "./../../node_modules/lit-html/lit-html.js";

const carTemplate = ({ brand, model, year, imageUrl, price, _id }) => html`
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

export {
    carTemplate,
}