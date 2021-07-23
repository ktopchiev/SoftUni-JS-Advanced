import {html} from '../../../node_modules/lit-html/lit-html.js';
import navBar from '../views/navbarView.js';
import showForm from '../views/topicCreateFormView.js';
import footer from '../views/footerView.js';
import { topicWrapper } from '../views/topicWrapperView.js';

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
                <div class="topic-container">
                    ${console.log(topics)}
                    ${topics.map(topic => html`${topicWrapper(topic)}`)}
                </div>
                

        </main>

    </div>
    <footer>
        ${footer}
    </footer>
`;

export default homePage;