let baseUrl = 'http://localhost:3030/jsonstore/collections/students';
let formElement = document.querySelector('form#form');
let resultTable = document.querySelector('table#results');
let tableBody = resultTable.querySelector('tbody');

attachEvents();

function attachEvents() {
    window.addEventListener('load', loadStudents);
    formElement.addEventListener('submit', appendStudent);
}

function loadStudents() {
    clearStudentsTable();
    
    fetch(baseUrl)
        .then(response => response.json())
        .then(students => {
            loadTableData(students);
        })
        .catch(error => console.error(error));
}

function appendStudent(e) {
    e.preventDefault();

    const inputData = new FormData(e.currentTarget);
    let [firstName, lastName, facultyNumber, grade] = [
        inputData.get('firstName').trim(),
        inputData.get('lastName').trim(),
        inputData.get('facultyNumber').trim(),
        inputData.get('grade').trim()
    ];

    //Validate input form
    let hasEmptyFields = inputFormHasEmptyFields(firstName, lastName, facultyNumber, grade);
    let notification = document.querySelector('form#form p.notification');

    if (hasEmptyFields) {
        notification.textContent = 'All fields are required!';
        return;
    } else {
        notification.textContent = '';
    }

    //Create new data object
    const data = createNewDataObject(firstName, lastName, facultyNumber, grade);

    fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
        .catch(error => console.error(error));

    //Load result into students table and clear input form fields
    loadStudents();
    e.currentTarget.reset();
}

function createNewDataObject(firstName, lastName, facultyNumber, grade) {
    return {
        firstName: firstName,
        lastName: lastName,
        facultyNumber: facultyNumber,
        grade: grade
    }
}

function loadTableData(students) {
    for (const [id, student] of Object.entries(students)) {
        let row = tableBody.insertRow();
        for (let i = 0; i < resultTable.rows[0].cells.length; i++) {
            row.insertCell(i).textContent = Object.entries(student)[i][1];
        }
    }
}

function clearStudentsTable() {
    while (tableBody.firstChild) {
        tableBody.firstChild.remove();
    }
}

function inputFormHasEmptyFields(...inputFields) {
    return inputFields.includes('');
}