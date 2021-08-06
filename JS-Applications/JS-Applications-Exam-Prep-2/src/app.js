import page from "./../node_modules/page/page.mjs";

import { decorateContext } from "./middleware/renderMiddleware.js";
import loginPage from "./pages/loginPage.js";
import navigationTemplate from './pages/navigationTemplate.js';
import homePage from './pages/homePage.js';
import authMiddleware from './middleware/authMiddleware.js';
import authService from "./services/authService.js";
import registerPage from './pages/registerPage.js';
import createCarPage from './pages/createCarPage.js';
import allCarsPage from "./pages/allCarsPage.js";
import carDetailsPage from './pages/carDetailsPage.js';
import editPage from "./pages/editPage.js";
import userListingsTemplate from "./pages/myListingsPage.js";

page(authMiddleware.getUserData);
page(decorateContext);
page(navigationTemplate.getNavTemplate)

page('/', '/home');
page('/index.html', '/home');
page('/home', homePage.getView);
page('/login', loginPage.getView);
page('/logout', authService.logOut);
page('/register', registerPage.getView);
page('/create', createCarPage.getView);
page('/all-listings', allCarsPage.getView);
page('/all-listings/:id', carDetailsPage.getView);
page('/all-listings/edit/:id', editPage.getView);
page('/my-listings', userListingsTemplate.getView);
page('/my-listings/:id', carDetailsPage.getView);

page.start();