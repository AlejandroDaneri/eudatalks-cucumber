let bankAccount = class BankAccount {
    balance;
    constructor(initialValue) {
        this.balance = initialValue;
    }

    withdraw(toSubtract) {
        if (this.balance < toSubtract) throw new Error('Insufficient founds');
        this.balance -= toSubtract;
    }

    deposit(toDeposit) {
        this.balance += toDeposit;
    }

    get balance() {
        return this.balance;
    }
};

module.exports = bankAccount;
