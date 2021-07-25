function search(e) {
   e.preventDefault();
   let townsDiv = document.querySelector('#towns');
   let searchField = document.querySelector('#searchText');
   let inputText = searchField.value.toLowerCase();
   let list = townsDiv.firstElementChild.children;
   let resultDiv = document.querySelector('#result');
   let matches = 0;

   for (let town = 0; town < list.length; town++) {
      if (list[town].textContent.toLowerCase().includes(inputText) && inputText !== '') {
         list[town].classList.add('active');
         matches += 1;
      }
   }

   resultDiv.textContent = `${matches} matches found`;
   searchField.value = '';

   searchField.addEventListener('focus', (e) => {
      for (let town = 0; town < list.length; town++) {
         if (list[town].textContent.toLowerCase().includes(inputText) && inputText !== '') {
            list[town].classList.remove('active');
         }
      }

      resultDiv.textContent = '';
   })

}

export default search;