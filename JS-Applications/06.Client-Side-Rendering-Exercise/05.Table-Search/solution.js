import { render } from "./../node_modules/lit-html/lit-html.js";
import { getAllStudents } from './service/studentsService.js';
import { tableTemplate } from './templates/tableBodyTemplate.js';

let tableBody = document.querySelector('tbody');

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

   let selectedStudents = students.map(s => Object.assign({}, s)); // Create new array with new objects from fetched data
   let matchedStudents = selectedStudents
      .filter(s => Object.values(s).some(val => val.toLowerCase().includes(searchValue))); // Match and filter values which are equal to search text

   matchedStudents.forEach(student => {
      student.class = 'select';
   }); // For each matched student, add to it new property class with value select

   searchField.value = '';
   render(tableTemplate(selectedStudents), tableBody);
}