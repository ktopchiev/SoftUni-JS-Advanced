import authService from "../services/authService.js";
import { getFurnitureById, deleteFurniture } from "../services/catalogService.js";
import { html } from "./../../../node_modules/lit-html/lit-html.js";
import { ifDefined } from "./../../node_modules/lit-html/directives/if-defined.js"

const detailsTemplate = (furnitureDetails) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>${furnitureDetails.model} ${furnitureDetails.make} Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="./../${furnitureDetails.img}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${furnitureDetails.make}</span></p>
                <p>Model: <span>${furnitureDetails.model}</span></p>
                <p>Year: <span>${furnitureDetails.year}</span></p>
                <p>Description: <span>${furnitureDetails.description}</span></p>
                <p>Price: <span>${furnitureDetails.price} $</span></p>
                <p>Material: <span>${furnitureDetails.material}</span></p>
                ${authService.getUserId() === furnitureDetails._ownerId 
                    ? html`
                     <div>
                        <a href="/edit/${furnitureDetails._id}" class="btn btn-info">Edit</a>
                        <button type="button" @click=${ifDefined(furnitureDetails.onClickDelete)} class="btn btn-red">Delete</button>
                    </div>`
                    : html ``}
            </div>
        </div>
    </div>
`;

async function getView(context) {
    let id = context.params.id;
    let details = await getFurnitureById(id);
    details.onClickDelete = deleteEvent;
    let result = detailsTemplate(details);

    context.renderView(result);

    async function deleteEvent(e) {
        console.log('here');
        e.preventDefault();
        console.log('delete');
        let confirmation = confirm('Are you sure that you want to delete this furniture?');

        if (confirmation) {
            await deleteFurniture(id);

            context.page.redirect('/my-furniture');
        }
    }
}

export default { getView };