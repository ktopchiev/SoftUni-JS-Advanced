import { html, render } from '../node_modules/lit-html/lit-html.js';
import homePage from './templates/pages/homePageTemplate.js';
import { getAllTopics } from './service/topicService.js';

const rootDiv = document.getElementsByClassName('root')[0];

getAllTopics().then(topics => {
    render(homePage(Object.entries(topics)), rootDiv);
});
