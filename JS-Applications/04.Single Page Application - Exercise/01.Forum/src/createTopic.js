import { showThemeContent } from './themeContentPage.js';
import createElement from './createElement.js';

export default function createTopicElement(data, id) {
    let newListItemElement = document.createElement('li');
    let newTopicTitle = createElement('div', 'topic-title');
    let newTopicContainer = createElement('div', 'topic-container');
    let topicNameWrapper = createElement('div', 'topic-name-wrapper');
    let topicNameDiv = createElement('div', 'topic-name');
    let topicTitleAnchor = createElement('a', 'normal');
    topicTitleAnchor.setAttribute('href', '#');

    let topicTitle = document.createElement('h2');
    topicTitle.textContent = data.topicName;
    topicTitleAnchor.appendChild(topicTitle);
    let divColumns = createElement('div', 'columns');
    let columnDiv = document.createElement('div');

    topicTitleAnchor.addEventListener('click', (e) => {
        showThemeContent(id);
    });

    //Date and time paragraph
    let topicDate = document.createElement('p');
    topicDate.textContent = 'Date:';

    let time = document.createElement('time');
    time.textContent = data.time;

    topicDate.appendChild(time);

    //Nickname div
    let nickNameDiv = createElement('div', 'nick-name');
    let topicUsername = document.createElement('p');
    topicUsername.textContent = 'Username:';
    let nameSpan = document.createElement('span');
    nameSpan.textContent = data.username;
    topicUsername.appendChild(nameSpan);
    nickNameDiv.appendChild(topicUsername);

    columnDiv.appendChild(topicDate);
    columnDiv.appendChild(nickNameDiv);

    //Append date and time and nickname to columns div
    divColumns.appendChild(columnDiv);

    topicNameDiv.appendChild(topicTitleAnchor);
    topicNameDiv.appendChild(divColumns);

    topicNameWrapper.appendChild(topicNameDiv);

    newTopicContainer.appendChild(topicNameWrapper);
    newTopicTitle.appendChild(newTopicContainer);
    newListItemElement.setAttribute('data-id', id);
    newListItemElement.appendChild(newTopicTitle);
    return newListItemElement;
}