import page from "./../node_modules/page/page.mjs";

import { decorateContext } from "./middleware/renderMiddleware.js";
import loginPage from "./pages/loginPage.js";
import navigationTemplate from './pages/navigationTemplate.js';
import welcomePage from './pages/welcomePage.js';
import authMiddleware from './middleware/authMiddleware.js';
import authService from "./services/authService.js";
import registerPage from './pages/registerPage.js';
import createMemePage from './pages/createMemePage.js';
import allMemesPage from "./pages/allMemesPage.js";
import memeDetailsPage from './pages/memeDetailsPage.js';

page(authMiddleware.getUserData);
page(decorateContext);
page(navigationTemplate.getNavTemplate)

page('/', '/home');
page('/index.html', '/home');
page('/home', welcomePage.getView);
page('/login', loginPage.getView);
page('/logout', authService.logOut);
page('/register', registerPage.getView);
page('/create', createMemePage.getView);
page('/all-memes', allMemesPage.getView);
page('/all-memes/:id', memeDetailsPage.getView);

page.start();