function create(words) {
   let divContentElement = document.getElementById('content');

   words.forEach(word => {
      let contentElement = document.createElement('div');
      let contentParagraph = document.createElement('p');
      contentParagraph.innerText = word;
      contentParagraph.style.display = 'none';
      contentElement.appendChild(contentParagraph);
      contentElement.addEventListener('click', (e) => {
         e.currentTarget.firstElementChild.style.display = 'block';
      })
      divContentElement.appendChild(contentElement);
   });
}