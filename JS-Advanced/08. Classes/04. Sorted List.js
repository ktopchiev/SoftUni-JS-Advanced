class List {
    list;
    size;

    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(number) {
        this.list.push(number);
        this.sortList();
        this.size = this.list.length
    }

    remove(index) {
        if (index < this.list.length && index > -1) {
            this.list.splice(index, 1);
            this.sortList();
            this.size = this.list.length
        }
    }

    sortList() {
        this.list = this.list.sort((a, b) => a - b);
    }

    get(index) {
        if (index < this.list.length && index > -1) {
            return this.list[index];
        }
    }

    get size() {
        return this.size;
    }
}

let list = new List();
list.add(7);
list.add(6);
list.add(5);
list.remove(0)
console.log(list.get(1));
console.log(list.size);
