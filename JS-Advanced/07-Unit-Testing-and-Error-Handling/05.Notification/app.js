
function notify(message) {
  let messageDiv = document.querySelector('#notification');
  
  messageDiv.textContent = message;
  messageDiv.style.display = 'block';

  messageDiv.addEventListener('click', (e) => {
    e.target.style.display = 'none';
  });
}