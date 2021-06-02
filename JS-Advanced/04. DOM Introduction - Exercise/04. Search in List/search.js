function search() {
   let list = document.getElementById('towns');
   let listElements = list.getElementsByTagName('li');
   let result = document.getElementById('result');
   let input = document.getElementById('searchText').value;
   let counter = 0;

   if (input !== '') {
      for (let i = 0; i < listElements.length; i++) {
         if (listElements[i].innerText.includes(input)) {
            listElements[i].style.fontWeight = 'bold';
            listElements[i].style.textDecoration = 'underline';
            counter++;
         }
      }
   }
   
   result.innerText = `${counter} matches found`;
}