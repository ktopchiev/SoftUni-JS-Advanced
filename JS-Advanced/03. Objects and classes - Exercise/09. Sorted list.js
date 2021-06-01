function createSortedList() {
    let list = {};

    list.elements = [];
    list.add = function (el) {
        if (el && !isNaN(el) && el !== Infinity && Number(el)) {
            this.elements.push(el);
            this.elements.sort();
            this.size++;
        }
    }
    list.remove = function (index) {
        if (this.elements[index] && Number(index)) {
            this.elements.splice(index, 1);
            this.elements.sort();
            this.size--;
        }
    }
    list.get = function (index) {
        if (this.elements[index] && Number(index)) {
            return this.elements[index];
        }
    }
    list.size = 0;
    list.sort = function () {
        this.elements.sort((a, b) => a - b);
    }

    return list;
}

let list = createSortedList();
list.add(NaN);
list.add(Infinity);
list.add(undefined);
list.add(9007199254740991);
list.add(1);
list.remove(5);
console.log(list.size);