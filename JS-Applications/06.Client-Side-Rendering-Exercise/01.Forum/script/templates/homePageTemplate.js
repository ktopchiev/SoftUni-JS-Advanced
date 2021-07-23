import {html} from '../../node_modules/lit-html/lit-html.js';
import navBar from './navbarTemplate.js';
import showForm from './createTopicFormTemplate.js';
import footer from './footerTemplate.js';
import { topicWrapper } from './topicWrapper.js';

const showHomePage = (topics) => html`
    
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

export default showHomePage;