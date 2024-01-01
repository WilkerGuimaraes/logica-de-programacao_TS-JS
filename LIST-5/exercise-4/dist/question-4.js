"use strict";
class Account {
    constructor() {
        this.balance = 0;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}
class SavingsAccount extends Account {
    constructor() {
        super();
        this.interestDay = 1;
    }
    getInterestDay() {
        return this.interestDay;
    }
    setInterestDay(newInterestDay) {
        this.interestDay = Math.max(1, Math.min(31, newInterestDay));
    }
}
const savingsAccount = new SavingsAccount();
savingsAccount.deposit(1000);
console.log(`Balance after deposit: ${savingsAccount.getBalance()}`);
savingsAccount.withdraw(500);
console.log(`Balance after withdrawal: ${savingsAccount.getBalance()}`);
savingsAccount.setInterestDay(5);
console.log(`New interest day: ${savingsAccount.getInterestDay()}`);
