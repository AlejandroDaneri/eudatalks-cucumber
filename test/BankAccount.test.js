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
    it('Transfering funds from an account to another should update both account balances', function () {
        let account1 = new bankAccount(20);
        let account2 = new bankAccount(10);
        account1.transfer(account1, account2, 20);
        expect(account1.balance).to.be.eq(0);
        expect(account2.balance).to.be.eq(30);
    });
});
