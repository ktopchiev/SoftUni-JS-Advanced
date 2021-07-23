import { html, render } from '../node_modules/lit-html/lit-html.js';
import homePage from './templates/pages/homePageTemplate.js';
import { getTopics } from './service/fetchTopics.js';

const rootDiv = document.getElementsByClassName('root')[0];

getTopics.then(topics => {
    render(homePage(Object.entries(topics)), rootDiv);
});