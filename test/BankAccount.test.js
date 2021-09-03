const { expect } = require('chai');
var bankAccount = require('../src/BankAccount');
describe('BankAccount', function () {
    it('Recent created bank account should have initial value', function () {
        let account = new bankAccount(10);
        expect(account.balance).to.be.eq(10);
    });
    it('Withdraw to a bank account should decrement actual balance', function () {
        let account = new bankAccount(20);
        account.withdraw(10);
        expect(account.balance).to.be.eq(10);
    });
    it('Deposit to a bank account should increment actual balance', function () {
        let account = new bankAccount(20);
        account.deposit(10);
        expect(account.balance).to.be.eq(30);
    });
});
