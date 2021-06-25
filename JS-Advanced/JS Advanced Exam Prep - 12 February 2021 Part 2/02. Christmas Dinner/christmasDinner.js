class ChristmasDinner {
    constructor(budget) {
        this.setBudget(budget);
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    setBudget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }

        this.budget = value;
    }

    shopping(productArr) {
        let price = productArr[1];
        if (price <= this.budget) {
            this.budget -= price;
            this.products.push(productArr[0]);
            return `You have successfully bought ${productArr[0]}!`;
        } else {
            throw new Error("Not enough money to buy this product");
        }
    }

    recipes(recipeObj) {
        let { recipeName, productsList } = recipeObj;
        let missingProduct = productsList.find(product => !this.products.includes(product));
        if (!missingProduct) {
            this.dishes.push({ recipeName, productsList });
            return `${recipeName} has been successfully cooked!`;
        } else {
            throw new Error("We do not have this product");
        }

    }

    inviteGuests(name, dish) {
        if (!this.dishes.find(d => d.recipeName === dish)) {
            throw new Error("We do not have this dish");
        } else if (this.guests[name]) {
            throw new Error("This guest has already been invited");
        } else {
            this.guests[name] = this.dishes.find(d => d.recipeName === dish);
            return `You have successfully invited ${name}!`;
        }
    }

    showAttendance() {
        let attendance = '';
        for (const [key, value] of Object.entries(this.guests)) {
            attendance += `${key} will eat ${value.recipeName}, which consists of ${value.productsList.join(', ')}\n`;
        }

        return attendance.trim();
    }
}



