function loadRepos() {
	let username = document.getElementById('username').value;
	let baseUrl = `https://api.github.com/users/${username}/repos`;
	let reposList = document.getElementById('repos');
	let repoListInitialValue = reposList.cloneNode(true);
	console.log(repoListInitialValue);
	fetch(baseUrl)
		.then(response => response.json())
		.then(data => {
			while (reposList.firstChild) {
				reposList.firstChild.remove();
			}
			data.forEach(element => {
				let newListElement = document.createElement('li');
				let newLink = document.createElement('a');
				newLink.href = element.html_url;
				newLink.textContent = element.full_name;
				newListElement.appendChild(newLink);
				reposList.appendChild(newListElement);
			});
		})
		.catch(error => {
			reposList.replaceWith(repoListInitialValue);
			for (let i = 0; i < reposList.children.length; i++) {
				reposList.children[i].style['list-style-type'] = 'disc';
			}
		});
}