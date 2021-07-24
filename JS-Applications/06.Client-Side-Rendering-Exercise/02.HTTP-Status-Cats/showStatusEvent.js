export default function showStatus(e) {
    e.preventDefault();
    let parentNode = e.target.parentNode;
    let statusDiv = parentNode.querySelector('div.status');

    if (statusDiv.style.display === 'none') {
        statusDiv.style.display = 'block';
        e.target.textContent = 'Hide status code';
    } else {
        statusDiv.style.display = 'none';
        e.target.textContent = 'Show status code';
    }
}