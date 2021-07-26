import { render } from "./../node_modules/lit-html/lit-html.js";
import { getAllStudents } from './service/studentsService.js';
import { tableTemplate } from './templates/tableBodyTemplate.js';

let tableBody = document.querySelector('tbody');

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let students;

   loadStudents();

   async function loadStudents() {
      students = Object.values(await getAllStudents());
      render(tableTemplate(students), tableBody);
   }

   function onClick() {
      let searchField = document.querySelector('#searchField');
      let searchValue = searchField.value.toLowerCase();

      let selectedStudents = students.map(s => Object.assign({}, s));
      let matchedStudents = selectedStudents.filter(s => Object.values(s).some(val => val.toLowerCase().includes(searchValue)));
      matchedStudents.forEach(student => {
         student.class = 'select';
      });
      searchField.value = '';
      render(tableTemplate(selectedStudents), tableBody);
   }
}

solve();