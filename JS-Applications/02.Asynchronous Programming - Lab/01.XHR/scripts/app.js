function loadRepos() {
   let baseUrl = 'https://api.github.com/users/testnakov/repos';
 
   fetch(baseUrl)
  .then(response => response.json())
  .then(data => data.forEach(element => {
     document.getElementById('res').textContent += JSON.stringify(element);
  }));
}