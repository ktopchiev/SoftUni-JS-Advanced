const url = 'http://localhost:3030/jsonstore/phonebook/';
const [phonebook,notification ]= [document.getElementById('phonebook'),document.querySelector('.notification')];
const hideMessage = ref => setTimeout(() => ref.textContent = '', 2000);

function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadData);
    document.getElementById('btnCreate').addEventListener('click', createEntry);
}

attachEvents();

async function loadData() {
    phonebook.innerHTML = '';
    const data = await request(url, 'get');
    Object.values(data).map(createRow).forEach(x => phonebook.appendChild(x));
}

async function createEntry() {
    const [person, phone] = [document.getElementById('person'), document.getElementById('phone')];
    notification.textContent = '';
    if (person.value == '' || phone.value == '') {
        notification.textContent = 'All fields are required!';
        hideMessage(notification);
        return;
    }
    const data = await request(url, 'post', { person: person.value, phone: phone.value });
    phonebook.appendChild(createRow(data));
    [person, phone].map(x => x.value = '');
}
async function deleteEntry(parent, id) {
    if(confirm('Are you sure you want to delete this record?')) {
        await request(url + id, 'delete');
        parent.remove();
    }
}

async function request(url, type, body) {
    const option = {
        method: type,
        headers: { 'Content-Type': 'application/json' },
    };
    if (body) { option.body = JSON.stringify(body); }
    const response = await fetch(url, option);
    if (!response.ok) {
        const { message } = response.json();
        throw new Error(message);
    }
    return response.json();
}

function create(type, ...content) {
    const el = document.createElement(type);
    content.map(c => typeof c === 'string' ? el.textContent = c : Array.isArray(c) ? el.setAttribute(c[0], c[1]) : el.appendChild(c));
    return el;
}
function createRow({ person, phone, _id }) {
    const button = create('button', ['data-id', _id], 'Delete');
    const parent = create('tr', create('td', person), create('td', phone),create('td', button));
    button.addEventListener('click', () => deleteEntry(parent, _id));
    return parent;
}

