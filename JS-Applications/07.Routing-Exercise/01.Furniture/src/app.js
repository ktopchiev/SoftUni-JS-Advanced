import page from './../node_modules/page/page.mjs';
import renderer from './middleware/renderer.js';
import furnitureDetailsPage from './pages/furnitureDetailsPage.js';
import homePage from './pages/homePage.js';
import loginPage from './pages/loginPage.js';
import registerPage from './pages/registerPage.js';
import createPage from './pages/createPage.js';
import authService from './services/authService.js';
import headerTemplate from './pages/templates/headerTemplate.js';

page('/', '/dashboard');
page('/index.html', '/dashboard');

page('/dashboard', renderer.decorateContext, headerTemplate.getView, homePage.getView);
page('/login', renderer.decorateContext,headerTemplate.getView, loginPage.getView);
page('/register', renderer.decorateContext, registerPage.getView);
page('/dashboard/:id', furnitureDetailsPage);
page('/create', renderer.decorateContext, headerTemplate.getView, createPage.getView);
page('/register', renderer.decorateContext, registerPage.getView);
page('/logout', async (context) => { await authService.logOut(); context.page.redirect('/dashboard') });

page.start();