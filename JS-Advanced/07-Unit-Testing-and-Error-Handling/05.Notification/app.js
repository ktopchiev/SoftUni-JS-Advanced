
function notify(message) {
  let messageDiv = document.querySelector('#notification');
  messageDiv.addEventListener('click', (e) => {
    e.target.style.display = 'none';
  });
  messageDiv.textContent = message;
  messageDiv.style.display = 'block';
}