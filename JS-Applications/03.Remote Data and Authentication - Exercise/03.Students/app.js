const url = 'http://localhost:3030/jsonstore/collections/students/';
const [tbody, notification] = [document.querySelector('#results tbody'), document.querySelector('.notification')];
const notify = (ref, message) => [ref.textContent = message, setTimeout(() => ref.textContent = '', 2000)];

(() => {
    loadData();
    document.getElementById('form').addEventListener('submit', createRecod);
})();

async function loadData() {
    tbody.innerHTML = '';
    try {
        const data = await request(url, 'get');
        Object.values(data)
            .sort((a, b) => b.grade - a.grade)
            .map((x, i) => createRow(i + 1, x)).forEach(x => tbody.appendChild(x));

    } catch (error) {
        notify(notification, 'Something went wrong while fetching data');
    }
}

async function createRecod(e) {
    try {
        await request(url, 'post', getData(e));
        loadData();
        e.target.reset();
    } catch (error) {
        notify(notification, error.toString().replace('Error: ', ''));
    }
}

function getData(e) {
    e.preventDefault();
    const data = [... new FormData(e.target)].reduce((a, [k, v]) => ({ ...a, ...{ [k]: v } }), {});
    if (Object.values(data).some(x => x === '')) {
        throw new Error('All fields are required!');
    }
    return data;
}

async function request(url, type, body) {
    const option = { method: type, headers: { 'Content-Type': 'application/json' } };
    if (body) { option.body = JSON.stringify(body); }
    const response = await fetch(url, option);
    if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
    }
    return response.json();
}

function create(type, ...content) {
    const el = document.createElement(type);
    content.map(c => typeof c === 'string' ? el.textContent = c : Array.isArray(c) ? el.setAttribute(c[0], c[1]) : el.appendChild(c));
    return el;
}

function createRow(i, { facultyNumber, firstName, grade, lastName, _id }) {
    return create('tr', ['data-id', _id], create('td', `${i}. ${firstName}`), create('td', lastName),
        create('td', facultyNumber), create('td', Number(grade).toFixed(2))
    );
}