import {html} from '../../node_modules/lit-html/lit-html.js';
import navBar from './navbarTemplate.js';
import showForm from './createTopicFormTemplate.js';
import footer from './footerTemplate.js';

const showHomePage = html`
    
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
                    
                </div>
                

        </main>

    </div>
    <footer>
        ${footer}
    </footer>
`;

export default showHomePage;