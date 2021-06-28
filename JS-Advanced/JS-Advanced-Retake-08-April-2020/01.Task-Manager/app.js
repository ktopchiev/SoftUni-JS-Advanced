function solve() {
    let buttonAdd = document.querySelector('button#add');
    let form = document.querySelector('form[action=""]');
    let taskInput = form.querySelector('#task');
    let descriptionTextArea = form.querySelector('#description');
    let dueDateInput = form.querySelector('#date');
    let openSection = document.querySelector('section h1.orange')
        .parentNode.parentNode.querySelectorAll('div')[1];
    let inProgressSection = document.querySelector('section div#in-progress');
    let completeSection = document.querySelector('section h1.green')
        .parentNode.parentNode.querySelectorAll('div')[1];

    buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();

        let task = taskInput.value;
        let description = descriptionTextArea.value;
        let dueDate = dueDateInput.value;

        if (!validateInput(task, description, dueDate)) {
            return;
        }


        let newTask = createTask(task, description, dueDate);
        openSection.appendChild(newTask);
    });

    function validateInput(task, description, dueDate) {
        if (task === '' || description === '' || dueDate === '') {
            return false;
        }

        return true;
    }

    function createTask(task, description, dueDate) {
        let newTask = document.createElement('article');
        let titleElement = document.createElement('h3');
        let descriptionElement = document.createElement('p');
        let dueDateElement = document.createElement('p');

        let buttonsDiv = createTaskInnerButtons('open');

        titleElement.textContent = task;
        descriptionElement.textContent = description;
        dueDateElement.textContent = dueDate;

        newTask.appendChild(titleElement);
        newTask.appendChild(descriptionElement);
        newTask.appendChild(dueDateElement);
        newTask.appendChild(buttonsDiv);

        return newTask;
    }

    function createTaskInnerButtons() {
        //Create buttons div
        let buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('flex');

        //Create buttons
        let buttonStart = document.createElement('button');
        buttonStart.classList.add('green');
        buttonStart.textContent = 'Start';
        buttonStart.addEventListener('click', startTask);

        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('red');
        buttonDelete.textContent = 'Delete';
        buttonStart.addEventListener('click', deleteTask);

        //Append buttons to div
        buttonsDivElement.appendChild(buttonStart);
        buttonsDivElement.appendChild(buttonDelete);

        return buttonsDivElement;
    }

    function startTask(e) {
        let currentTask = e.target.parentNode.parentNode;
        changeTaskButtons(currentTask);
        inProgressSection.appendChild(currentTask.cloneNode(true));
        currentTask.remove();
    }

    function deleteTask(e) {
        let currentTask = e.target.parentNode.parentNode;
        currentTask.remove();
    }

    function finishTask(e) {
        let currentTask = e.target.parentNode.parentNode;
        completeSection.appendChild(currentTask.cloneNode(true));
        currentTask.remove();
    }

    function changeTaskButtons(task) {
        let button;
        if(task.parentNode.parentNode.querySelector('h1').classList.contains('orange')) {
            button = task.querySelector('button.green');
            button.classList.add('orange');
            button.textContent = 'Finish';
            button.classList.remove('green');
            button.addEventListener('click', finishTask);
        };
    }
}