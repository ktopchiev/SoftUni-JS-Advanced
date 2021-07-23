import formDataValidate from './formValidate.js';
import { showHome } from './pages/homePage.js';
import { posts } from './services/endpoints.js';

let newTopicForm = document.querySelector('#new-topic-form');
let cancelButton = document.querySelector('#new-topic-form button.cancel');
let homeHref = document.querySelector('#home-link');

showHome();

homeHref.addEventListener('click', (e) => {
   e.preventDefault();
   showHome();
});

newTopicForm.addEventListener('submit', (e) => {
   e.preventDefault();

   let data = formDataValidate(e.currentTarget);
   if (data === undefined) {
      return;
   }

   fetch(posts, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
   })
      .then(res => res.json())
      .then(resData => {
         showHome();
         newTopicForm.reset();
      })
});

cancelButton.addEventListener('click', (e) => {
   newTopicForm.reset();
});