import { render } from "./../../node_modules/lit-html/lit-html.js";

let mainSection = document.querySelector('#mainSection');
let navigationContainer = document.querySelector('#navigation');

const renderNav = (templateResult) => {
    render(templateResult, navigationContainer);
}

const renderContent = (templateResult) => {
    render(templateResult, mainSection);
}

const decorateContext = (context, next) => {
    context.renderNav = renderNav;
    context.renderContent = renderContent;
    next();
}

export { decorateContext };