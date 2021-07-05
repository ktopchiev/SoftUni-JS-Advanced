function loadCommits() {
    let usernameInput = document.getElementById('username');
    let repoInput = document.getElementById('repo');
    let baseUrl = `https://api.github.com/repos/${usernameInput.value}/${repoInput.value}/commits`;
    let commitsList = document.getElementById('commits');

    fetch(baseUrl)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(showError(res));
            }
        })
        .then(data => {
            clearList(commitsList);
            data.forEach(commit => {
                let newListItem = document.createElement('li');
                let authorName = commit.commit.author.name;
                let commitMessage = commit.commit.message;
                newListItem.textContent = `${authorName}: ${commitMessage}`;
                commitsList.appendChild(newListItem);
            });
        })
        .catch((error) => {

            console.log(error);

        });

    clearInputFields();

    function clearList(list) {
        while (list.firstChild) {
            list.firstChild.remove();
        }
    }

    function clearInputFields() {
        usernameInput.value = '';
        repoInput.value = '';
    }

    function showError(res) {
        let errorMessage = `Error: ${res.status} (Not Found)`;
        let newListItem = document.createElement('li');
        newListItem.textContent = errorMessage;
        clearList(commitsList);
        commitsList.appendChild(newListItem);
    }
}