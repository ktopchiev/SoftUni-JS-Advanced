let baseUrl = 'http://localhost:3030/jsonstore/phonebook';
let loadButton = document.getElementById('btnLoad');
let createContactButton = document.getElementById('btnCreate');
let phonebookBody = document.getElementById('phonebook');

attachEvents();

function attachEvents() {
    loadButton.addEventListener('click', loadContacts);
    createContactButton.addEventListener('click', appendContact);
}

function loadContacts() {
    clearPhonebookBody();
    fetch(baseUrl)
    .then(response => response.json())
    .then(contacts => {
        for (const key in contacts) {
            let newContactElement = createContactElement(contacts[key]);
            phonebookBody.appendChild(newContactElement);
        }
    })
    .catch(error => console.error(error));
}

function appendContact() {
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');
    let notification = document.querySelector('section.container p.notification');
    let notificationMsg = validateInput(personInput, phoneInput);

    if (notificationMsg) {
        notification.textContent = notificationMsg;
        return;
    } else {
        notification.textContent = notificationMsg;
    }

    const data = createNewDataObject(personInput.value, phoneInput.value);
    fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    })
    .catch(error => console.error(error));
    loadContacts();
    clearInputFields(personInput, phoneInput);
}

function createNewDataObject(person, phone) {
    return {
        person: person,
        phone: phone
    }
}

function createContactElement(data) {
    let newTableRow = document.createElement('tr');
    let nameDataElement = document.createElement('td');
    let phoneDataElement = document.createElement('td');
    let deleteContactData = document.createElement('td');
    let deleteContactButton = document.createElement('button');

    nameDataElement.textContent = data.person;
    phoneDataElement.textContent = data.phone;
    deleteContactButton.data_id = data._id;
    deleteContactButton.textContent = 'Delete';
    deleteContactButton.addEventListener('click', deleteContact);
    deleteContactData.appendChild(deleteContactButton);

    newTableRow.appendChild(nameDataElement);
    newTableRow.appendChild(phoneDataElement);
    newTableRow.appendChild(deleteContactData);

    return newTableRow;
}

function deleteContact(e) {
    let dataId = e.target.data_id;
    e.target.parentNode.parentNode.remove();
    fetch(`${baseUrl}/${dataId}`, {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'}
    })
    .catch(error => console.error(error));
}

function clearPhonebookBody() {
    while (phonebookBody.firstChild) {
        phonebookBody.firstChild.remove();
    }
}

function clearInputFields(person, phone) {
    person.value = '';
    phone.value = '';
}

function validateInput(person, phone) {
    if(person.value === '' && phone.value === '') {
        return 'Fields cannot be empty!';
    } else if(person.value === '' && phone.value !== '') {
        return 'Person field cannot be empty!';
    } else if(person.value !== '' && phone.value === '') {
        return 'Phone field cannot be empty!'
    } else {
        return '';
    }
}