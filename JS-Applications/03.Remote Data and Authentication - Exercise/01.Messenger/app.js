const url = 'http://localhost:3030/jsonstore/messenger';
const messages = document.getElementById('messages');
const notification = document.querySelector('.notification');

function attachEvents() {
    document.getElementById('submit').addEventListener('click', postMessage);
    document.getElementById('refresh').addEventListener('click', loadAllMessages);
}

attachEvents();

async function postMessage() {
    const [author, content] = [document.getElementById('author'), document.getElementById('content')];
    notification.textContent = '';
    if (author.value == '' || content.value == '') { 
        notification.textContent = 'All fields are required!';
        return;
     }
    await request(url, { author: author.value, content: content.value });
    messages.value += `\n${author.value}: ${content.value}`;
    [author, content].map(x => x.value = '');
}
async function loadAllMessages() {
    try {
        const data = await request(url);
        messages.value = Object.values(data).map(({ author, content }) => `${author}: ${content}`).join('\n');
    } catch (error) {
        messages.value = 'Error';
    }
}

async function request(url, option) {
    if (option) {
        option = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(option)
        };
    }
    const response = await fetch(url, option);
    if (!response.ok) {
        const { message } = response.json();
        throw new Error(message);
    }
    return response.json();
}