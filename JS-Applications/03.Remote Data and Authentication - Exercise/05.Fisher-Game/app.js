let usersBaseUrl = 'http://localhost:3030/users';
let catchesBaseUrl = 'http://localhost:3030/data/catches';
let guestNavigation = document.getElementById('guest');
guestNavigation.style.display = 'inline';
let welcomeParagraph = document.querySelector('nav p.email span');
welcomeParagraph.textContent = 'guest';
let loginLink = document.querySelector('a#login');
let mainSection = document.getElementsByTagName('main')[0];
let loginView = document.querySelector('#login-view');
let views = document.querySelector('#views');
mainSection.appendChild(views);
let registerView = document.querySelector('#register-view');
let homeView = document.querySelector('#home-view');
let mainFieldset = homeView.querySelector('fieldset#main');
let loginForm = loginView.querySelector('form#login');
let loadButton = homeView.querySelector('aside > button');
let addForm = homeView.querySelector('#addForm');
let catchesDiv = homeView.querySelector('#catches');

attachEvents();

function attachEvents() {
    loginLink.addEventListener('click', showLoginView);
    loginForm.addEventListener('submit', logIn);
    loadButton.addEventListener('click', loadCatches);
}

function showLoginView(e) {
    views.style.display = 'inline-block';
    registerView.style.display = 'none';
    homeView.style.display = 'none';
}

function hideLoginView() {
    views.style.display = 'flex';
    registerView.style.display = 'none';
    loginView.style.display = 'none';
}

function logIn(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let data = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    fetch(`${usersBaseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                notify(loginForm, response);
                displayHomePage();
                return response.json();
            } else {
                notify(loginForm, response);
            }
        })
        .then(userData => {
            localStorage.setItem('accessToken', userData.accessToken);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayHomePage() {
    hideLoginView();
    homeView.style.display = 'contents';
    mainFieldset.style.display = 'block';
}

function loadCatches() {
    fetch(catchesBaseUrl)
        .then(response => response.json())
        .then(catches => {
            catches.forEach(catchData => {
                let newCatchForm = createCatchForm(catchData);
                console.log(newCatchForm);
                catchesDiv.appendChild(newCatchForm);
            })
        })
        .catch(error => console.error(error));
}

function createCatchForm(data) {
    let newCatchForm = addForm.cloneNode(true);
    newCatchForm.querySelector('legend').textContent = '';

    document.querySelector('input[name="angler"]').value = data.angler;
    document.querySelector('input[name="weight"]').value = data.weight;
    document.querySelector('input[name="species"]').value = data.species;
    document.querySelector('input[name="location"]').value = data.location;
    document.querySelector('input[name="bait"]').value = data.bait;
    document.querySelector('input[name="captureTime"]').value = data.captureTime;

    let updateCatchButton = document.createElement('button');
    updateCatchButton.classList.add('update');
    updateCatchButton.textContent = 'UPDATE';
    let deleteCatchButton = document.createElement('button');
    deleteCatchButton.classList.add('delete');
    deleteCatchButton.textContent = 'DELETE';
    
    newCatchForm.querySelector('button').remove();
    newCatchForm.classList.add('catch');
    newCatchForm.id = "";
    newCatchForm.querySelector('fieldset').style.border = 'none';
    newCatchForm.querySelector('fieldset').style.display = 'block';

    newCatchForm.appendChild(updateCatchButton);
    newCatchForm.appendChild(deleteCatchButton);

    return newCatchForm;
}

function notify(form, response) {
    let notification = form.querySelector('p.notification');
    if (response.ok) {
        notification.textContent = '';
    } else {
        notification.textContent = 'Invalid data!';
    }
}