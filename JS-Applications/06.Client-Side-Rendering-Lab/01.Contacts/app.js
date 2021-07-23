import { html, render } from './node_modules/lit-html/lit-html.js';
import { contactsList } from './templates/contactsList.js';
import { contacts } from './data/contacts.js';

function showDetails(e) {
    e.preventDefault();
    let parent = e.target.parentNode;
    let details = parent.querySelector('div.details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

contacts.forEach(contact => {
    contact.showDetails = showDetails;
})

render(contactsList(contacts), document.body);