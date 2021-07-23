import { html, render } from '../node_modules/lit-html/lit-html.js';
import showHomePage from './templates/homePageTemplate.js';

const rootDiv = document.getElementsByClassName('root')[0];



render(showHomePage(topics), rootDiv);