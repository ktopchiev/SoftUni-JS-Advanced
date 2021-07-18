export default function updateTopicContent(comment) {
    let userCommentDiv = document.createElement('div');
    let topicNameWrapperDiv = createElement('div', 'topic-name-wrapper');
    let topicNameDiv = createElement('div', 'topic-name');
    let topicNameParagraph = document.createElement('p');
    let userNameStrong = document.createElement('strong');
    let timeElement = document.createElement('time');
    let postContentDiv = createElement('div', 'post-content');
    let postContentParagraph = document.createElement('p');

    postContentParagraph.textContent = comment.content;
    timeElement.textContent = comment.time;
    userNameStrong.textContent = comment.author;
    topicNameParagraph.textContent = ' commented on ';

    postContentDiv.appendChild(postContentParagraph);
    topicNameParagraph.appendChild(userNameStrong);
    topicNameParagraph.appendChild(timeElement);
    topicNameDiv.appendChild(topicNameParagraph);
    topicNameWrapperDiv.appendChild(topicNameDiv);
    userCommentDiv.appendChild(topicNameWrapperDiv);

    return userCommentDiv;
}

function createElement(type, clss) {
    let newElement = document.createElement(type);
    newElement.classList.add(clss);
    return newElement;
}