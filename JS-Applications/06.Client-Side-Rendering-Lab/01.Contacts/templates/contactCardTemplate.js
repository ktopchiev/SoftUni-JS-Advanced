import { html } from '../node_modules/lit-html/lit-html.js';

export const contactCard = (contactData) => html`
    <div class="contact card">
        <div>
            <i class="far fa-user-circle gravatar"></i>
        </div>
        <div class="info">
            <h2>${contactData.name} </h2>
            <button @click=${contactData.showDetails} class="detailsBtn">Details</button>
            <div class="details" id="${contactData.id}">
                <p>${contactData.phoneNumber} </p>
                <p>${contactData.email} </p>
            </div>
        </div>
    </div>
`;