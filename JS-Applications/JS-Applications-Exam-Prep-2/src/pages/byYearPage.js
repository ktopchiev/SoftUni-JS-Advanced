import carsService from "../services/carsService.js";
import { html } from "./../../node_modules/lit-html/lit-html.js";

import { carTemplate } from "./carTemplate.js";

const filterByYearTemplate = (input) => html`
    <section id="search-cars">
        <h1>Filter by year</h1>
    
        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
            <button @click=${input.onClick} class="button-list">Search</button>
        </div>
        ${input.btnClicked 
        ? html `<h2>Results:</h2>
                <div class="listings">
                    ${input.data.length !== 0 ? input.data.map(c => html`${carTemplate(c)}`) : html`<p class="no-cars"> No results.</p>`}
                </div>`
        : html ``}
        
    </section>
`;

function getView(context) {
    let input = {
        onClick,
        btnClicked: false,
        data: [],
    }

    let templateResult = filterByYearTemplate(input);
    context.renderContent(templateResult);

    function onClick(e) {
        let input = e.target.parentNode.querySelector('input');
        input.btnClicked = true;

        carsService.search(Number(input.value))
            .then(data => {
                input.data = data;
                context.renderContent(filterByYearTemplate(input))
            })
    }
}

export default {
    getView
}