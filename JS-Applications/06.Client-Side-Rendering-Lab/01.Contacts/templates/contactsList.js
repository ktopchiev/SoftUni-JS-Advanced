import { html } from '../node_modules/lit-html/lit-html.js';
import { contactCard } from './contactCardTemplate.js';

export const contactsList = (contactData) => html`
    <div id="contacts">
        ${contactData.map(c => html`${contactCard(c)}`)}
    </div>
`;