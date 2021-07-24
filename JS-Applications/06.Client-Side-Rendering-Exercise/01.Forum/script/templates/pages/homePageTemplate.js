import { html } from '../../../node_modules/lit-html/lit-html.js';
import navBar from '../views/navbarView.js';
import showForm from '../views/topicCreateFormView.js';
import footer from '../views/footerView.js';
import { topicContainer } from '../views/topicContainerView.js';

const homePage = (topics) => html`
    
    <header>
        ${navBar}
    </header>
    
    <!-- homepage -->
    <div class="container">
        <main>
            ${showForm}
            <div class="topic-title">
                <!-- topic component  -->
                ${topicContainer(topics)}
            </div>
        </main>
    </div>
    <footer>
        ${footer}
    </footer>
`;

export default homePage;