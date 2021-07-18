import showHomeTopics from './showHomeTopics.js';
import { hideThemeContent } from './themeContentPage.js';

let homePage = document.querySelector('#home-page');

function showHome() {
    hideThemeContent();
    showHomeTopics();
    homePage.classList.remove('hidden');
}

function hideHome() {
    homePage.classList.add('hidden');
}

export { showHome, hideHome }