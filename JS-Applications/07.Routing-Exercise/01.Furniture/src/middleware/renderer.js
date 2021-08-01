import { render } from "./../../node_modules/lit-html/lit-html.js";

let divRoot = document.querySelector('.root');
let header = document.querySelector('header');

function renderView(template) {
    render(template, divRoot);
}

function renderNav(template) {
    render(template, header);
}

export function decorateContext(context, next) {
    context.renderView = renderView;
    context.renderNav = renderNav;
    next();
}