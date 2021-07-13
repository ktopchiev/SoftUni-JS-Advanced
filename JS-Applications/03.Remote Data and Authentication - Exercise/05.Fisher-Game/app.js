let usersBaseUrl = 'http://localhost:3030/users';
let catchesBaseUrl = 'http://localhost:3030/data/catches';

let guestNavigation = document.getElementById('guest');
guestNavigation.style.display = 'inline';
let welcomeParagraph = document.querySelector('nav p.email span');
welcomeParagraph.textContent = 'guest';

let userNavigation = document.getElementById('user');

let loginLink = document.querySelector('a#login');
let registerLink = document.querySelector('a#register');

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
let addNewCatchButton = addForm.querySelector('button');

let registerForm = registerView.querySelector('form#register');

attachEvents();

function attachEvents() {
    loginLink.addEventListener('click', showLoginView);
    loginForm.addEventListener('submit', logIn);
    loadButton.addEventListener('click', loadCatches);
    registerLink.addEventListener('click', showRegisterView);
    registerForm.addEventListener('submit', register);

}

function showLoginView() {
    views.style.display = 'inline-block';
    registerView.style.display = 'none';
    homeView.style.display = 'none';
}

function hideLoginView() {
    views.style.display = 'inline-block';
    registerView.style.display = 'none';
    loginView.style.display = 'none';
}

function showRegisterView() {
    hideLoginView();
    views.style.display = 'inline-block';
    registerView.style.display = 'inline-block';
    homeView.style.display = 'none';
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
            changeNavBar(userData);
            localStorage.setItem('accessToken', userData.accessToken);
        })
        .catch(error => {
            console.error(error);
        });
}

function register(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let data = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    fetch(`${usersBaseUrl}/register`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                notify(registerForm, response);
                return response.json();
            } else {
                notify(registerForm, response);
            }
        })
        .then(userData => {
            changeNavBar(userData);
            localStorage.setItem('accessToken', userData.accessToken);
        })
        .catch(error => {
            console.error(error);
        });
}

function changeNavBar(data) {
    welcomeParagraph.textContent = `${data.email}`;
    guestNavigation.style.display = 'none';
    userNavigation.style.display = 'inline';
}

function displayHomePage() {
    hideLoginView();
    homeView.style.display = 'flex';
    mainFieldset.style.display = 'flex';
    addNewCatchButton.disabled = false;
}

function loadCatches() {
    fetch(catchesBaseUrl)
        .then(response => response.json())
        .then(catches => {
            catches.forEach(catchData => {
                let newCatchForm = cloneCatchForm(catchData);
                console.log(newCatchForm);
                catchesDiv.appendChild(newCatchForm);
            })
        })
        .catch(error => console.error(error));
}

function cloneCatchFormTemplate(data) {
    let newCatchForm = addForm.cloneNode(true);
    newCatchForm.querySelector('legend').textContent = '';

    newCatchForm.querySelector('input[name="angler"]').value = data.angler;
    newCatchForm.querySelector('input[name="weight"]').value = data.weight;
    newCatchForm.querySelector('input[name="species"]').value = data.species;
    newCatchForm.querySelector('input[name="location"]').value = data.location;
    newCatchForm.querySelector('input[name="bait"]').value = data.bait;
    newCatchForm.querySelector('input[name="captureTime"]').value = data.captureTime;

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
    //TODO: Only current user's buttons should be active.
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