import createElement from "./createElement.js";

export default function updateTopicContent(comment) {
    let userCommentDiv = document.createElement('div');
    let topicNameWrapperDiv = createElement('div', 'topic-name-wrapper');
    let topicNameDiv = createElement('div', 'topic-name');
    let topicNameParagraph = document.createElement('p');
    let userNameStrong = document.createElement('strong');
    let timeElement = document.createElement('time');
    let postContentDiv = createElement('div', 'post-content');
    let postContentParagraph = document.createElement('p');

    postContentParagraph.textContent = comment.comment;
    timeElement.textContent = comment.time;
    userNameStrong.textContent = comment.username;

    postContentDiv.appendChild(postContentParagraph);
    topicNameParagraph.appendChild(userNameStrong);
    topicNameParagraph.appendChild(timeElement);
    userNameStrong.insertAdjacentText('afterend', ' commented on ');
    topicNameDiv.appendChild(topicNameParagraph);
    topicNameDiv.appendChild(postContentDiv);
    topicNameWrapperDiv.appendChild(topicNameDiv);
    userCommentDiv.appendChild(topicNameWrapperDiv);

    return userCommentDiv;
}