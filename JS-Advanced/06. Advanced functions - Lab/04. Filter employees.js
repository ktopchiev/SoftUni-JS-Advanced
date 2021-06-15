function solve(input, criteria) {
  function ReturnCriteriaName(criteria) {
    return criteria.split('-')[0];
  }

  function ReturnCriteriaValue(criteria) {
    return criteria.split('-')[1];
  }

  function filterByCriteria(data) {
    return criteria === 'all'
      ? employees
      : employees = employees.filter(x => x[ReturnCriteriaName(criteria)] === ReturnCriteriaValue(criteria));
  }

  let employees = JSON.parse(input);
  employees = filterByCriteria(employees);
  let count = 0;
  for (let element of employees) {
    console.log(`${count++}. ${element['first_name']} ${element['last_name']} - ${element.email}`);
  }
}

let result = solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  'gender-Female');

console.log(result);
