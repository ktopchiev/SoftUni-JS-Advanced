function createArticle() {
	
	let titleInput = document.getElementById('createTitle');
	let contentInput = document.getElementById('createContent');
	let listOfArticless = document.createElement('ul');
	let article = document.createElement('li');
	let articleTitle = document.createElement('h3');
	let articleContent = document.createElement('p');
	articleTitle.innerHTML = titleInput.value;
	articleContent.innerHTML = contentInput.value;
	article.appendChild(articleTitle);
	article.appendChild(articleContent);
	let articlesSection = document.getElementById('articles');
	if (titleInput.value && contentInput.value) {
		articlesSection.appendChild(listOfArticless);
		listOfArticless.appendChild(article);
	}
	titleInput.value = '';
	contentInput.value = '';
}