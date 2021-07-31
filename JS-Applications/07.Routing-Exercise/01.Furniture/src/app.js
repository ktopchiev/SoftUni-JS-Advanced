import page from './../node_modules/page/page.mjs';
import furnitureDetailsView from './views/furnitureDetailsView.js';
import homePageView from './views/homePageView.js';
import logInView from './views/logInView.js';
import registerView from './views/registerView.js';

page('/', homePageView);
page('/login', logInView);
page('/register', registerView);
page('/dashboard', homePageView);
page('/dashboard/:id', furnitureDetailsView);

page.start();