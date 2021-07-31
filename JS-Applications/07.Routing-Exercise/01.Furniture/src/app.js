import page from './../node_modules/page/page.mjs';
import homePageView from './views/homePageView.js';

page('/', homePageView);

page.start();