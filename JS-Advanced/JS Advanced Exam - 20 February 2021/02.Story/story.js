class Story {

    #comments;
    #likes;

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.#comments = [];
        this.#likes = [];
    }

    get likes() {
        if (this.#likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this.#likes.length === 1) {
            return `${this.#likes[0]} likes this story!`;
        } else {
            return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`;
        }
    }

    // get comments() {
    //     return this.#comments;
    // }

    like(username) {
        if (this.#likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else if (username === this.creator) {
            throw new Error("You can't like your own story!");
        } else {
            this.#likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {
        if (!this.#likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        } else {
            let index = this.#likes.findIndex(user => user === username);
            this.#likes.splice(index, 1);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {
        if (!this.#comments.find(c => c.id === id)) {
            this.#comments = this._sortInAsc();
            let newId = this.#comments.length > 0 ? this.#comments[this.#comments.length - 1].id + 1 : 1;
            let newComment = {
                id: newId,
                username,
                content,
                replies: [],
            };
            this.#comments.push(newComment);
            return `${username} commented on ${this.title}`;
        } else {
            this.#comments = this._sortInAsc();
            let repliedComment = this.#comments.find(c => c.id === id);
            let newReply = {
                id,
                username,
                content,
            };
            newReply.id = repliedComment.replies.length > 0 ? `${repliedComment.id}.${repliedComment.replies.length + 1}` : `${repliedComment.id}.1`;
            repliedComment.replies.push(newReply);
            return "You replied successfully";
        }
    }

    _sortInAsc() {
        return this.#comments.sort((a, b) => a.id - b.id);
    }

    _sortInDesc() {
        return this.#comments.sort((a, b) => b.id - a.id);
    }

    _sortByUsername() {
        this.#comments.sort((a, b) => a.username.localeCompare(b.username));
        this.#comments.forEach(comment => {
            comment.replies.sort((a, b) => a.username.localeCompare(b.username));
        });

        return this.#comments;
    }

    toString(sortingType) {
        switch (sortingType) {
            case 'asc':
                this.#comments = this._sortInAsc();
                break;
            case 'desc':
                this.#comments = this._sortInDesc();
                break;
            case 'username':
                this.#comments = this._sortByUsername();
            default:
                break;
        }

        let header = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.#likes.length}\nComments:\n`;

        let string = this.#comments.reduce((acc, comment) => {
            acc += `-- ${comment.id}. ${comment.username}: ${comment.content}\n`;
            if (comment.replies.length > 0) {
                comment.replies.forEach(reply => {
                    acc += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                });
            }
            return acc;
        }, header)

        return string.trim();
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
