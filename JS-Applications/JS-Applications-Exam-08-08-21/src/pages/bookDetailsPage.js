import { html } from "./../../node_modules/lit-html/lit-html.js";

import bookService from "../services/bookService.js";
import authService from "../services/authService.js";

const buttonsTemplate = (onClickDelete, bookId) => html`
    <a class="button warning" href="/dashboard/edit/${bookId} ">Edit</a>
    <button @click=${onClickDelete} class="button danger">Delete</button>
`;

const likeTemplate = (userId, _ownerId, likes, addLike, isLiked) => html`
    ${authService.isLoggedIn() && userId !== _ownerId ? html`<a class="button ${isLiked}" @click=${addLike}
        href="#">Like</a>` :
    html``}
    <!-- ( for Guests and Users )  -->
    <div class="likes">
        <img class="hearts" src="/images/heart.png">
        <span id="total-likes">Likes: ${likes}</span>
    </div>
`;

const bookDetailsTemplate = ({ title, type, description, imageUrl, _ownerId, _id }, likes, userId, onClick, addLike, isLiked) => html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${title}</h3>
            <p class="type">Type: ${type}</p>
            <p class="img"><img src="${imageUrl}"></p>
            <div class="actions">
                <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                ${userId === _ownerId ? buttonsTemplate(onClick, _id) : html``}
                <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                ${likeTemplate(userId, _ownerId, likes, addLike, isLiked)}
    
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${description}</p>
        </div>
    </section>
`;

function getView(context) {
    let id = context.params.id;

    bookService.getOne(id)
        .then(data => {
            let userData = context.userData;

            bookService.getAllLikes(id)
                .then(likes => {

                    bookService.getUserLike(id, userData.id)
                        .then(liked => {

                            let isLiked;
                            liked ? isLiked = "hidden" : isLiked = "";

                            let templateResult = bookDetailsTemplate(data, likes, userData.id, onClickDelete, onClickLike, isLiked);

                            context.renderContent(templateResult);

                            function onClickLike(e) {

                                bookService.addLike(id)
                                    .then(() => {
                                        context.renderContent(bookDetailsTemplate(data, likes, userData.id, onClickDelete, onClickLike, isLiked));
                                    });
                            }

                        })
                });
        });

    function onClickDelete(e) {
        e.preventDefault();

        let confirmed = confirm('Are you sure you want to delete this book?');

        if (confirmed) {
            bookService.deleteOne(id)
                .then(() => {
                    context.page.redirect('/dashboard');
                })
        }
    }
}

export default {
    getView,
}