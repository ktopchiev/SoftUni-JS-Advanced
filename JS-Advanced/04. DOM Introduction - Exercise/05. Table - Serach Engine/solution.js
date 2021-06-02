function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let table = document.getElementsByTagName('tbody')[0];
      let tableData = table.getElementsByTagName('td');
      let inputSearchString = document.getElementById('searchField').value;

      for (let i = 0; i < tableData.length; i++) {
         if (tableData[i].innerText.includes(inputSearchString)) {
            tableData[i].parentElement.classList.add("select");
         }
         
      }
      
      let inputField = document.getElementById('searchField');
      inputField.value = '';
   }
}