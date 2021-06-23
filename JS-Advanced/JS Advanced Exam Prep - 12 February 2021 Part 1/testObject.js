

let modules = [];

let newLecture = {DOM: '2020/01/01 - 18:00'};
let secondNewLecture = {Arrays: '2020/02/01 - 18:00'};

newModule.name = 'Advanced';
newModule.lectures.push(secondNewLecture);
newModule.lectures.push(newLecture);
console.log(Object.entries(newModule.lectures));
// newModule.lectures = Object.values(newModule.lectures).sort((a, b) => a.localeCompare(b));

// modules.push(newModule);

// console.log(modules);