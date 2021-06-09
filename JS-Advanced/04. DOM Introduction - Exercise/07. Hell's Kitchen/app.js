function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = document.querySelector('textarea').value.split('","');

      let restaurants = input.reduce((acc, current) => {
         current = current.split(' - ');
         let name = current.shift();

         // Clear unnecesary characters from the string and separate restaurant's name
         if (name.includes('[\"')) {
            name = name.substr(2);
         } else {
            current = current.filter(x => x.includes('\"]')).map(x => x.substr(0, x.length - 2));
         }

         // Separate the workers
         let workers = current.join(', ').split(', ');

         let workersSalaries = [];

         // Get salaries and average salary
         let sum = 0;

         workers.forEach(w => {
            let worker = w.match(/\w+/)[0];
            let salary = w.match(/\d+/)[0];
            workersSalaries.push([worker, Number(salary)]);
            sum += Number(salary);
         });

         let averageSalary = Number(sum / workersSalaries.length);

         // Sort the workers and get best worker
         workersSalaries.sort((a, b) => b[1] - a[1]);
         let bestWorker = workersSalaries[0];
         

         // Create new restaurant object from collected data
         let restaurantObj = {
            name,
            averageSalary,
            bestWorker,
            workersSalaries
         }

         // If there is object with the same restaurant name update his data
         let findedRestaurant = acc.find(x => x.name === name);

         if (findedRestaurant) {
            findedRestaurant.name = name;
            findedRestaurant.averageSalary = averageSalary;
            findedRestaurant.bestWorker = bestWorker;
            findedRestaurant.workersSalaries = workersSalaries;
         } else {
            acc.push(restaurantObj);
         }

         return acc;
      }, []);

      restaurants.sort((a, b) => b.averageSalary - a.averageSalary);

      // Visualize data
      // Show best restaurant data
      let bestRestaurantElement = document.getElementById('bestRestaurant');
      let bestRestaurantParagraph = bestRestaurantElement.getElementsByTagName('p')[0];
      let strForBestRestaurant = '';

      strForBestRestaurant += `Name: ${restaurants[0].name} `;
      strForBestRestaurant += `Average Salary: ${Number(restaurants[0].averageSalary).toFixed(2)} `;
      strForBestRestaurant += `Best Salary: ${Number(restaurants[0].bestWorker[1]).toFixed(2)}`;
      bestRestaurantParagraph.textContent = strForBestRestaurant;

      // Show best restaurant's workers data
      let bestRestaurantWorkersElement = document.getElementById('workers');
      let workersParagraph = bestRestaurantWorkersElement.getElementsByTagName('p')[0];
      let strForWorkers = '';

      restaurants[0].workersSalaries.forEach(worker => {
         strForWorkers += `Name: ${worker[0]} With Salary: ${worker[1]} `;
      });

      workersParagraph.textContent = strForWorkers;
   }
}