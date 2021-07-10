let baseUrl = 'http://localhost:3030/jsonstore/collections/students';
let formElement = document.querySelector('form#form');
let resultTable = document.querySelector('table#results');

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

    let validate = validateForm(firstName, lastName, facultyNumber, grade);
    let notification = document.querySelector('form#form p.notification');
    
    if (validate) {
        notification.textContent = 'All fields are required!';
        return;
    } else {
        notification.textContent = '';
    }

    const data = createNewDataObject(firstName, lastName, facultyNumber, grade);
    fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
        .catch(error => console.error(error));
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
    const tableBody = resultTable.querySelector('tbody');
    for (const student in students) {
        let row = tableBody.insertRow();
        let firstName = row.insertCell(0);
        firstName.textContent = students[student].firstName;
        let lastName = row.insertCell(1);
        lastName.textContent = students[student].lastName;
        let facultyNumber = row.insertCell(2);
        facultyNumber.textContent = students[student].facultyNumber;
        let grade = row.insertCell(3);
        grade.textContent = students[student].grade;
    }
}

function clearStudentsTable() {
    let tableBody = resultTable.querySelector('tbody');
    while (tableBody.firstChild) {
        tableBody.firstChild.remove();
    }
}

function validateForm(...inputFields) {
    return inputFields.includes('');
}