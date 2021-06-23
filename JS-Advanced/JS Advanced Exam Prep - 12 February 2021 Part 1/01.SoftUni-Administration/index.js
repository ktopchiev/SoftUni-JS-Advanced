function solve() {
    let addButtonElement = document.querySelector('.action button');

    let modules = {};

    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let modulesSection = document.querySelector('section div.modules');

        let lectureNameInputElement = document.querySelector('form input[name="lecture-name"]');
        let dateInputElement = document.querySelector('form input[name="lecture-date"]');
        let moduleNameSelectElement = document.querySelector('form select[name="lecture-module"]');

        let lectureName = lectureNameInputElement.value;
        let date = dateInputElement.value;
        let moduleName = moduleNameSelectElement.value.toUpperCase();

        if (!validateInput(
            lectureName,
            date,
            moduleName)) {
            return;
        }

        let newModule;

        if (modules[moduleName]) {
            modules[moduleName].push({ name: lectureName, date: formatLectureDateAndTime(date) });
            let newLecture = createLecture(lectureName, date);
            let allModules = document.querySelectorAll('div .module');

            for (let i = 0; i < allModules.length; i++) {
                if (allModules[i].textContent.includes(moduleName.toUpperCase())) {
                    allModules[i].querySelector('ul').appendChild(newLecture);
                }
            }
            
        } else {
            newModule = createModule(lectureName, date, moduleName);
            modulesSection.appendChild(newModule);
        }

    });


    function createModule(lectureName, date, moduleName) {
        let newModule = document.createElement('div');
        newModule.classList.add('module');

        let newModuleTitle = document.createElement('h3');
        newModuleTitle.textContent = `${moduleName.toUpperCase()}-MODULE`;

        let newModuleLecturesList = document.createElement('ul');
        let newLecture = createLecture(lectureName, date);

        newModuleLecturesList.appendChild(newLecture);
        newModule.appendChild(newModuleTitle);
        newModule.appendChild(newModuleLecturesList);
        date = formatLectureDateAndTime(date);
        modules[moduleName] = [];
        modules[moduleName].push({ name: lectureName, date: date })

        return newModule;
    }

    function createLecture(lectureName, dateAndTime) {
        let newLecture = document.createElement('li');
        newLecture.classList.add('flex');

        let newLectureNameAndTime = document.createElement('h4');
        dateAndTime = formatLectureDateAndTime(dateAndTime);
        newLectureNameAndTime.textContent = `${lectureName} - ${dateAndTime}`;

        let newLectureDeleteButton = document.createElement('button');
        newLectureDeleteButton.textContent = 'Del';
        newLectureDeleteButton.classList.add('red');
        newLectureDeleteButton.addEventListener('click', (e) => {
            let moduleList = e.target.parentNode.parentNode;
            e.target.parentNode.remove();
            if (moduleList.children.length === 0) {
                let moduleName = moduleList.parentNode.querySelector('h3').textContent.split('-')[0];
                moduleList.parentNode.remove();
                delete modules[moduleName];
            }
        });

        newLecture.appendChild(newLectureNameAndTime);
        newLecture.appendChild(newLectureDeleteButton);

        return newLecture;
    }

    //2021-06-23T11:27
    //2021/06/23 - 11:27
    function formatLectureDateAndTime(inputDate) {
        let dateAndTime = inputDate.split('T');
        let date = dateAndTime[0].replace(/-/g, '/');
        return date += ` - ${dateAndTime[1]}`;
    }

    function validateInput(lectureName, date, module) {
        if (lectureName && date && module !== 'SELECT MODULE') {
            return true;
        }

        return false;
    }
}