import page from "./../node_modules/page/page.mjs";

import { decorateContext } from "./middleware/renderMiddleware.js";
import loginPage from "./pages/loginPage.js";
import navigationTemplate from './pages/navigationTemplate.js';
import authMiddleware from './middleware/authMiddleware.js';
import authService from "./services/authService.js";
import registerPage from './pages/registerPage.js';
import addBook from './pages/addBookPage.js';
import dashboardPage from "./pages/dashboardPage.js";
import bookDetailsPage from './pages/bookDetailsPage.js';
import editPage from "./pages/editPage.js";
import userPersonalPage from "./pages/userPersonalPage.js";

page(authMiddleware.getUserData);
page(decorateContext);
page(navigationTemplate.getNavTemplate)

page('/', '/dashboard');
page('/index.html', '/dashboard');
page('/dashboard', dashboardPage.getView);
page('/login', loginPage.getView);
page('/logout', authService.logOut);
page('/register', registerPage.getView);
page('/add-book', addBook.getView);
page('/dashboard/:id', bookDetailsPage.getView);
page('/dashboard/edit/:id', editPage.getView);
page('/my-books', userPersonalPage.getView);
page('/my-books/:id', bookDetailsPage.getView);

page.start();