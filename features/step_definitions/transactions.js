const {Given, When, Then} = require("@cucumber/cucumber");
const assert = require('assert');
const BankAccount = require('../../src/BankAccount')

let account;
let errorMsg;
Given('I have ${float} in my account', function (initialValue) {
    account = new BankAccount(initialValue)
    errorMsg=undefined;
    assert(account.balance,initialValue)
});

When('I try to withdraw ${float}', function (toSubtract) {
    try{
        account.withdraw(toSubtract)
    }catch(error){
        errorMsg=error.message
    }
});

Then('I should have ${float}', function (expectedValue) {
    assert.strictEqual(errorMsg,undefined)
    assert(account.balance,expectedValue)
});

Then('the transaction will be denied', function () {
    assert.strictEqual(errorMsg,'Insufficient founds')
});


When('I deposit ${float}', function (toDeposit) {
    account.deposit(toDeposit)
});
