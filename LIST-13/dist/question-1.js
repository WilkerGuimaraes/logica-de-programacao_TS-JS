"use strict";
class Client {
    constructor(name, cpf) {
        this.name = name;
        this.cpf = cpf;
    }
}
class AbstractAccount {
    constructor(accountNumber, balance, client) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.client = client;
    }
    getClient() {
        return this.client;
    }
    getBalance() {
        return this.balance;
    }
}
class SavingsAccount extends AbstractAccount {
    constructor(accountNumber, balance, client) {
        super(accountNumber, balance, client);
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient balance.");
        }
    }
    earnInterest() {
        const interest = this.balance * 0.01;
        this.balance += interest;
    }
}
class CheckingAccount extends AbstractAccount {
    constructor(accountNumber, balance, client) {
        super(accountNumber, balance, client);
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        const interestFee = amount * 0.01;
        if (amount + interestFee <= this.balance) {
            this.balance -= amount - interestFee;
        }
        else {
            console.log("Insufficient balance (considering interest fee).");
        }
    }
}
class Bank {
    openAccount(client, accountNumber, initialBalance, type) {
        if (type === "Savings") {
            return new SavingsAccount(accountNumber, initialBalance, client);
        }
        else if (type === "Checking") {
            return new CheckingAccount(accountNumber, initialBalance, client);
        }
        else {
            throw new Error("Invalid account type");
        }
    }
    deposit(account, amount) {
        account.deposit(amount);
    }
    withdraw(account, amount) {
        account.withdraw(amount);
    }
}
class Main {
    static main() {
        const generalBank = new Bank();
        const client1 = new Client("John", "123.456.789-00");
        const savingsAccount = generalBank.openAccount(client1, "S123", 1000, "Savings");
        const checkingAccount = generalBank.openAccount(client1, "C456", 2000, "Checking");
        generalBank.deposit(savingsAccount, 500);
        generalBank.withdraw(checkingAccount, 300);
        console.log(`Savings Account Balance: $${savingsAccount.getBalance()}`);
        console.log(`Checking Account Balance: $${checkingAccount.getBalance()}`);
    }
}
Main.main();
