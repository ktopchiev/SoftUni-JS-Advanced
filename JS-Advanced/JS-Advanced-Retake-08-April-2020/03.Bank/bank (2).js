class Bank {

    #bankName;

    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
        this.transactions = [];
    }

    newCustomer(customer) {
        this._isCustomerExists(customer);
        customer.totalMoney = 0;
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        let customer = this._isCustomerExists(personalId);
        let newTransaction = this._createTransaction(customer, 'deposit', amount);
        this.transactions.push(newTransaction);
        customer.totalMoney += Number(amount);
        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let customer = this._isCustomerExists(personalId);
        if (customer.totalMoney - Number(amount) < 0) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        } else {
            customer.totalMoney -= Number(amount);
            let newTransaction = this._createTransaction(customer, 'withdraw', amount);
            this.transactions.push(newTransaction);
            return `${customer.totalMoney}$`;
        }
    }

    customerInfo(personalId) {
        let customer = this._isCustomerExists(personalId);
        let customerInfo =
            `Bank name: ${this.#bankName}\n` +
            `Customer name: ${customer.firstName} ${customer.lastName}\n` +
            `Customer ID: ${customer.personalId}\n` +
            `Total Money: ${customer.totalMoney}$\n` +
            `Transactions:\n`;

        this.transactions
            .filter(t => t.personalId === customer.personalId)
            .sort((a, b) => b.number - a.number)
            .forEach(t => {
                customerInfo += `${t.number}. ${t.firstName} ${t.lastName} ${t.type} ${t.amount}$!\n`;
            });

        return customerInfo.trim();
    }

    _isCustomerExists(info) {
        if (isNaN(info) && typeof info === 'object' && info !== null) {
            let customer = this.allCustomers.find(c => c.personalId === info.personalId);
            if (customer) {
                throw new Error(`${info.firstName} ${info.lastName} is already our customer!`);
            }
        } else if (!isNaN(info)) {
            let customer = this.allCustomers.find(c => c.personalId === info);
            if (!customer) {
                throw new Error("We have no customer with this ID!");
            }

            return customer;
        }
    }

    _createTransaction(customer, transactionType, amount) {
        let newTransaction = {};
        newTransaction.number = this._findLastTransactionNumber(customer);
        newTransaction.personalId = customer.personalId;
        newTransaction.firstName = customer.firstName;
        newTransaction.lastName = customer.lastName;
        newTransaction.type = this._transformTransactionTypeString(transactionType);
        newTransaction.amount = amount;

        return newTransaction;
    }

    _findLastTransactionNumber(customer) {
        let number = 1;
        if (this.transactions.find(c => c.personalId === customer.personalId)) {
            number = this.transactions
                .filter(c => c.personalId === customer.personalId)
                .sort((a, b) => b.number - a.number)[0].number;
            number += 1;
        }
        return number;
    }

    _transformTransactionTypeString(transactionType) {
        if (transactionType === 'deposit') {
            transactionType = 'made deposit of';
        } else if (transactionType === 'withdraw') {
            transactionType = 'withdrew'
        }
        return transactionType;
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));