import { render } from "./../../node_modules/lit-html/lit-html.js";
import headerGuestTemplate from "./templates/headerGuestTemplate.js";
import { registerTemplate } from "./templates/registerTemplate.js";

export default function (context) {
    let header = document.querySelector('header');
    let rootDiv = document.querySelector('.root');

    render(headerGuestTemplate(context), header);
    render(registerTemplate(), rootDiv);
}