class Account {
  private balance: number;

  constructor() {
    this.balance = 0;
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    this.balance -= amount;
  }
}

class SavingsAccount extends Account {
  private interestDay: number;

  constructor() {
    super();
    this.interestDay = 1;
  }

  getInterestDay(): number {
    return this.interestDay;
  }

  setInterestDay(newInterestDay: number) {
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
