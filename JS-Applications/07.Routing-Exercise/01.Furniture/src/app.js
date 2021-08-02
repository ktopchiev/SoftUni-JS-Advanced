import page from './../node_modules/page/page.mjs';
import renderer from './middleware/renderer.js';
import furnitureDetailsPage from './pages/furnitureDetailsPage.js';
import homePage from './pages/homePage.js';
import loginPage from './pages/loginPage.js';
import registerPage from './pages/registerPage.js';
import createPage from './pages/createPage.js';
import authService from './services/authService.js';

page('/dashboard', renderer.decorateContext, homePage);
page('/login', renderer.decorateContext, loginPage.getView);
page('/register', registerPage);
page('/', '/dashboard');
page('/index.html', '/dashboard')
page('/dashboard/:id', furnitureDetailsPage);
page('/create', renderer.decorateContext, createPage.getView);
page('/register', renderer.decorateContext, registerPage.getView);
page('/logout', async (context) => { await authService.logOut(); context.page.redirect('/dashboard') });

page.start();