class Person {
  private name: string;
  private lastName: string;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }

  getName(): string {
    return this.name;
  }

  getLastName(): string {
    return this.lastName;
  }

  setName(name: string): void {
    this.name = name;
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

class Employee extends Person {
  private registrationNumber: number;
  private salary: number;

  constructor(
    name: string,
    lastName: string,
    registrationNumber: number,
    salary: number
  ) {
    super(name, lastName);
    this.registrationNumber = registrationNumber;
    this.salary = Math.max(0, salary);
  }

  getRegistrationNumber(): number {
    return this.registrationNumber;
  }

  setRegistrationNumber(registrationNumber: number): void {
    this.registrationNumber = registrationNumber;
  }

  getSalary(): number {
    return this.salary;
  }

  setSalary(newSalary: number): void {
    this.salary = Math.max(0, newSalary);
  }

  getSalaryFirstInstallment(): number {
    return this.salary * 0.6;
  }

  getSalarySecondInstallment(): number {
    return this.salary * 0.4;
  }
}

class Professor extends Employee {
  getSalaryFirstInstallment(): number {
    return this.getSalary();
  }

  getSalarySecondInstallment(): number {
    return 0;
  }
}

class UsePerson {
  static main(): void {
    const person1 = new Person("José", "Manoel");
    const person2 = new Employee("Leandro", "Charles", 0, 2000.0);
    const person3 = new Professor("Rita", "Cassia", 0, 500.0);

    console.log(`Person1's Full Name: ${person1.getFullName()}`);
    console.log(`Person2's Full Name: ${person2.getFullName()}`);
    console.log(`Person3's Full Name: ${person3.getFullName()}`);

    console.log(
      `\nPerson2's Salary (First Installment): ${person2.getSalaryFirstInstallment()}`
    );
    console.log(
      `Person2's Salary (Second Installment): ${person2.getSalarySecondInstallment()}`
    );
    console.log(
      `\nPerson3's Salary (First Installment): ${person3.getSalaryFirstInstallment()}`
    );
    console.log(
      `Person3's Salary (Second Installment): ${person3.getSalarySecondInstallment()}`
    );
  }
}

UsePerson.main();
