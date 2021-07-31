import { html } from "./../../node_modules/lit-html/lit-html.js";

const detailsTemplate = (furnitureDetails) => html `
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
                <div>
                    <a href=”#” class="btn btn-info">Edit</a>
                    <a href=”#” class="btn btn-red">Delete</a>
                </div>
            </div>
        </div>
    </div>
`;

export default detailsTemplate;