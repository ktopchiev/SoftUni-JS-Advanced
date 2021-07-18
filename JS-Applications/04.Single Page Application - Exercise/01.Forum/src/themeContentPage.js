import updateTopicContent from "./updateTopicContent.js";
import { hideHome } from "./homePage.js";
import createElement from "./createElement.js";
import formDataValidate from "./formValidate.js";

let commentsUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments';
let topicsUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts';
let commentsCointainer = document.querySelector('#comments');
let commentForm = document.querySelector('div.answer-comment form');
let topicId;

function showThemeContent(id) {
    hideHome();
    let fragment = new DocumentFragment();

    fetch(`${commentsUrl}`)
        .then(res => res.json())
        .then(comments => {
            for (const comment in comments) {
                if (comments[comment].topicId === id) {
                    let updatedElement = updateTopicContent(comments[comment]);
                    fragment.appendChild(updatedElement);
                }
            }

            fetch(`${topicsUrl}/${id}`)
                .then(res => res.json())
                .then(topic => {
                    //Clear comments content before loading the new content
                    let comments = commentsCointainer.querySelectorAll('div.comment');
                    Array.prototype.forEach.call(comments, function (node) {
                        node.parentNode.removeChild(node);
                    });

                    topicId = topic._id;

                    let topicTitleElement = commentsCointainer.querySelector('div.theme-name h2');
                    topicTitleElement.textContent = topic.topicName;
                    let topicHeader = createTopicContentHeader(topic.username, topic.time, topic.postText);
                    let themeContentDiv = commentsCointainer.firstElementChild;
                    themeContentDiv.insertBefore(topicHeader, themeContentDiv.childNodes[4]);
                    commentsCointainer.querySelector('div.comment').appendChild(fragment);
                    commentsCointainer.classList.remove('hidden');
                })
        })
        .catch(error => console.error(error));

    commentForm.addEventListener('submit', postNewComment);
}

function postNewComment(e) {
    e.preventDefault();
    let data = formDataValidate(e.currentTarget, topicId);

    if (data === undefined) {
        return;
    }

    fetch(commentsUrl, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            commentForm.reset();
            showThemeContent(data.topicId);
        })
        .catch(error => console.error(error));
}

function hideThemeContent() {
    commentsCointainer.classList.add('hidden');
}

function createTopicContentHeader(author, time, content) {
    let commentDiv = createElement('div', 'comment');
    let headerDiv = createElement('div', 'header');
    let avatarImg = document.createElement('img');
    avatarImg.setAttribute('src', './static/profile.png');
    avatarImg.setAttribute('alt', 'avatar');
    let headerNameAndTimeParagraph = document.createElement('p');
    let nameSpan = document.createElement('span');
    let timeElement = document.createElement('time');
    let postContent = createElement('p', 'post-content');

    postContent.textContent = content;
    nameSpan.textContent = author;
    timeElement.textContent = time;

    appendChildren(headerNameAndTimeParagraph, nameSpan, timeElement);
    nameSpan.insertAdjacentText('afterend', ' posted on ');
    appendChildren(headerDiv, avatarImg, headerNameAndTimeParagraph, postContent);
    commentDiv.appendChild(headerDiv);

    return commentDiv;
}

function appendChildren(parent, ...children) {
    children.forEach(child => {
        parent.appendChild(child);
    });
}
export { showThemeContent, hideThemeContent }