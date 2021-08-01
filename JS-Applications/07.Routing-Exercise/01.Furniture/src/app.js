import page from './../node_modules/page/page.mjs';
import furnitureDetailsPage from './pages/furnitureDetailsPage.js';
import homePage from './pages/homePage.js';
import logInPage from './pages/logInPage.js';
import registerPage from './pages/registerPage.js';

page('/login', logInPage.getView);
page('/register', registerPage);
page('/dashboard', homePage);
page('/', '/dashboard');
page('/index.html', '/dashboard')
page('/dashboard/:id', furnitureDetailsPage);

page.start();