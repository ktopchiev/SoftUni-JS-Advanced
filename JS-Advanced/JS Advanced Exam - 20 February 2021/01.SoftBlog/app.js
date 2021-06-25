function solve() {
   //Input form
   let createButtonElement = document.querySelector('form button.create');
   let inputForm = document.querySelector('form');
   let authorInputElement = inputForm.querySelector('input[id="creator"]');
   let titleInputElement = inputForm.querySelector('input[id="title"]');
   let categoryInputElement = inputForm.querySelector('input[id="category"]');
   let contentTextAreaElement = inputForm.querySelector('textarea[id="content"]');

   //Posts section
   let postsSection = document.querySelector('div.site-content section');

   //Archive section
   let archiveList = document.querySelector('aside section.archive-section ol');

   createButtonElement.addEventListener('click', (e) => {
      e.preventDefault();
      let newArticle = createArticle(
         authorInputElement.value,
         titleInputElement.value,
         categoryInputElement.value,
         contentTextAreaElement.value
         );

      postsSection.appendChild(newArticle);
      clearInputForm();
   });


   function createArticle(author, title, category, content) {
      //Create info elements
      let articleElement = document.createElement('article');
      let titleElement = document.createElement('h1');
      let categoryElement = document.createElement('p');
      let categoryTextContent = document.createElement('strong');
      let creatorElement = document.createElement('p');
      let creatorTextContent = document.createElement('strong');
      let contentText = document.createElement('p');

      //Set values for every element
      titleElement.textContent = title;
      categoryElement.textContent = 'Category: ';
      categoryTextContent.textContent = category;
      creatorElement.textContent = 'Creator: ';
      creatorTextContent.textContent = author;
      contentText.textContent = content;

      //Create div with buttons
      let buttonDivElement = document.createElement('div');
      buttonDivElement.classList.add('buttons');
      let buttonDelete = document.createElement('button');
      buttonDelete.classList.add('btn', 'delete');
      let buttonArchive = document.createElement('button');
      buttonArchive.classList.add('btn', 'archive');
      buttonDelete.textContent = 'Delete';
      buttonArchive.textContent = 'Archive';
      buttonDivElement.appendChild(buttonDelete);
      buttonDivElement.appendChild(buttonArchive);

      //Add events to buttons
      buttonDelete.addEventListener('click', deleteArticle);
      buttonArchive.addEventListener('click', archiveArticle);

      //Append elements to article section
      categoryElement.appendChild(categoryTextContent);
      creatorElement.appendChild(creatorTextContent);

      articleElement.appendChild(titleElement);
      articleElement.appendChild(categoryElement);
      articleElement.appendChild(creatorElement);
      articleElement.appendChild(contentText);
      articleElement.appendChild(buttonDivElement);

      return articleElement;
   }

   function deleteArticle(event) {
      event.target.parentNode.parentNode.remove();
   }

   function archiveArticle(event) {
      let articleTitle =  event.target.parentNode.parentNode.querySelector('h1').textContent;
      let archiveListEntity = document.createElement('li');
      archiveListEntity.textContent = articleTitle;
      archiveList.appendChild(archiveListEntity);
      sortArchiveTitles(archiveList);
      deleteArticle(event);
   }

   function sortArchiveTitles(archiveList) {
         var titles = [];
         var items = archiveList.getElementsByTagName('li');

         for (var i = 0, l = items.length; i < l; i++) {
             titles.push(items[i].innerHTML)
         }

         titles.sort();

         for (var i = 0, l = items.length; i < l; i++) {
             items[i].innerHTML = titles[i];
         }
   }

   function clearInputForm() {
      authorInputElement.value = '';
      titleInputElement.value = '';
      categoryInputElement.value = '';
      contentTextAreaElement.value = '';
   }
}
