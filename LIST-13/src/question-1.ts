class Client {
  private name: string;
  private cpf: string;

  constructor(name: string, cpf: string) {
    this.name = name;
    this.cpf = cpf;
  }
}

abstract class AbstractAccount {
  protected accountNumber: string;
  protected balance: number;
  protected client: Client;

  constructor(accountNumber: string, balance: number, client: Client) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.client = client;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  getClient(): Client {
    return this.client;
  }

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends AbstractAccount {
  constructor(accountNumber: string, balance: number, client: Client) {
    super(accountNumber, balance, client);
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance.");
    }
  }

  earnInterest(): void {
    const interest = this.balance * 0.01;
    this.balance += interest;
  }
}

class CheckingAccount extends AbstractAccount {
  constructor(accountNumber: string, balance: number, client: Client) {
    super(accountNumber, balance, client);
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    const interestFee = amount * 0.01;

    if (amount + interestFee <= this.balance) {
      this.balance -= amount - interestFee;
    } else {
      console.log("Insufficient balance (considering interest fee).");
    }
  }
}

interface GeneralBank {
  openAccount(
    client: Client,
    accountNumber: string,
    initialBalance: number,
    type: string
  ): AbstractAccount;
  deposit(account: AbstractAccount, amount: number): void;
  withdraw(account: AbstractAccount, amount: number): void;
}

class Bank implements GeneralBank {
  openAccount(
    client: Client,
    accountNumber: string,
    initialBalance: number,
    type: string
  ): AbstractAccount {
    if (type === "Savings") {
      return new SavingsAccount(accountNumber, initialBalance, client);
    } else if (type === "Checking") {
      return new CheckingAccount(accountNumber, initialBalance, client);
    } else {
      throw new Error("Invalid account type");
    }
  }

  deposit(account: AbstractAccount, amount: number): void {
    account.deposit(amount);
  }

  withdraw(account: AbstractAccount, amount: number): void {
    account.withdraw(amount);
  }
}

class Main {
  static main(): void {
    const generalBank: GeneralBank = new Bank();

    const client1: Client = new Client("John", "123.456.789-00");

    const savingsAccount: AbstractAccount = generalBank.openAccount(
      client1,
      "S123",
      1000,
      "Savings"
    );
    const checkingAccount: AbstractAccount = generalBank.openAccount(
      client1,
      "C456",
      2000,
      "Checking"
    );

    generalBank.deposit(savingsAccount, 500);
    generalBank.withdraw(checkingAccount, 300);

    console.log(`Savings Account Balance: $${savingsAccount.getBalance()}`);
    console.log(`Checking Account Balance: $${checkingAccount.getBalance()}`);
  }
}

Main.main();
