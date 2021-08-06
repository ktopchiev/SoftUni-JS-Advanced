import carsService from "../services/carsService.js";
import { html } from "./../../node_modules/lit-html/lit-html.js";

import { carTemplate } from "./carTemplate.js";

const filterByYearTemplate = (onClick) => html`
    <section id="search-cars">
        <h1>Filter by year</h1>
    
        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
            <button @click=${onClick} class="button-list">Search</button>
        </div>
    
        <h2>Results:</h2>
        <div class="listings">
    
    
    
            <!-- Display if there are no matches -->
            <p class="no-cars"> No results.</p>
        </div>
    </section>
`;

function getView(context) {
    let templateResult = filterByYearTemplate(onClick);
    context.renderContent(templateResult);

    function onClick(e) {
        let input = e.target.parentNode.querySelector('input');

        carsService.search(Number(input.value))
            .then(data => {
                let fragment = new DocumentFragment();
                data.forEach(element => {
                    fragment.appendChild(carTemplate(element))
                });
                context.renderSearchResults(fragment);
            })
    }
}

export default {
    getView
}