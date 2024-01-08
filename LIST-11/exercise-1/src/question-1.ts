interface Authenticatable {
  authenticate(password: number): boolean;
}

abstract class Person {
  protected name: string;
  protected age: number;
  protected cpf: number;

  constructor(name: string, age: number, cpf: number) {
    this.name = name;
    this.age = age;
    this.cpf = cpf;
  }

  abstract getName(): string;
  abstract getAge(): number;
  abstract getCpf(): number;
}

abstract class PhysicalPerson extends Person {
  constructor(name: string, age: number, cpf: number) {
    super(name, age, cpf);
  }
}

abstract class Employee extends PhysicalPerson {
  protected salary: number;

  constructor(name: string, age: number, cpf: number, salary: number) {
    super(name, age, cpf);
    this.salary = salary;
  }

  abstract getSalary(): number;
  abstract getBonus(): number;
}

class Manager extends Employee implements Authenticatable {
  private password: number;
  private managedEmployees: number;

  constructor(
    name: string,
    age: number,
    cpf: number,
    salary: number,
    password: number,
    managedEmployees: number
  ) {
    super(name, age, cpf, salary);
    this.password = password;
    this.managedEmployees = managedEmployees;
  }

  authenticate(password: number): boolean {
    return this.password === password;
  }

  getBonus(): number {
    return this.getSalary() * 0.1;
  }

  getSalary(): number {
    return this.salary;
  }

  // Implementation of abstract methods inherited from Person
  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getCpf(): number {
    return this.cpf;
  }
}

class Director extends Employee implements Authenticatable {
  private password: number;

  constructor(
    name: string,
    age: number,
    cpf: number,
    salary: number,
    password: number
  ) {
    super(name, age, cpf, salary);
    this.password = password;
  }

  authenticate(password: number): boolean {
    return this.password === password;
  }

  getBonus(): number {
    return this.getSalary() * 0.15;
  }

  getSalary(): number {
    return this.salary;
  }

  // Implementation of abstract methods inherited from Person
  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getCpf(): number {
    return this.cpf;
  }
}

class Secretary extends Employee {
  constructor(name: string, age: number, cpf: number, salary: number) {
    super(name, age, cpf, salary);
  }

  getBonus(): number {
    return this.getSalary() * 0.5;
  }

  getSalary(): number {
    return this.salary;
  }

  // Implementation of abstract methods inherited from Person
  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getCpf(): number {
    return this.cpf;
  }
}

class Client extends PhysicalPerson implements Authenticatable {
  private balance: number;
  private limit: number;
  private overdraft: number;
  private password: number;

  constructor(
    name: string,
    age: number,
    cpf: number,
    balance: number,
    limit: number,
    overdraft: number,
    password: number
  ) {
    super(name, age, cpf);
    this.balance = balance;
    this.limit = limit;
    this.overdraft = overdraft;
    this.password = password;
  }

  authenticate(password: number): boolean {
    return this.password === password;
  }

  // Implementation of abstract methods inherited from Person
  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getCpf(): number {
    return this.cpf;
  }
}

class Main {
  static main(): void {
    // Example of a Client
    const client = new Client("John", 30, 123456789, 5000, 2000, 1000, 1234);

    // Example of a Director
    const director = new Director("Maria", 45, 987654321, 10000, 5678);

    // Example of a Manager
    const manager = new Manager("Carlos", 35, 456789123, 8000, 4321, 10);

    // Example of a Secretary
    const secretary = new Secretary("Ana", 25, 654321789, 4000);

    // Print information
    this.printInfo(client);
    this.printInfo(director);
    this.printInfo(manager);
    this.printInfo(secretary);
  }

  static printInfo(person: Person): void {
    console.log(`Name: ${person.getName()}`);
    console.log(`Age: ${person.getAge()}`);
    console.log(`CPF: ${person.getCpf()}`);

    // Check if the person is an instance of Employee before calling specific methods
    if (person instanceof Employee) {
      console.log(`Salary: ${person.getSalary()}`);
      console.log(`Bonus: ${person.getBonus()}`);
    }

    console.log("------------------------");
  }
}

Main.main();
