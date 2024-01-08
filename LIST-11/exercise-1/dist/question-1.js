"use strict";
class Person {
    constructor(name, age, cpf) {
        this.name = name;
        this.age = age;
        this.cpf = cpf;
    }
}
class PhysicalPerson extends Person {
    constructor(name, age, cpf) {
        super(name, age, cpf);
    }
}
class Employee extends PhysicalPerson {
    constructor(name, age, cpf, salary) {
        super(name, age, cpf);
        this.salary = salary;
    }
}
class Manager extends Employee {
    constructor(name, age, cpf, salary, password, managedEmployees) {
        super(name, age, cpf, salary);
        this.password = password;
        this.managedEmployees = managedEmployees;
    }
    authenticate(password) {
        return this.password === password;
    }
    getBonus() {
        return this.getSalary() * 0.1;
    }
    getSalary() {
        return this.salary;
    }
    // Implementation of abstract methods inherited from Person
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getCpf() {
        return this.cpf;
    }
}
class Director extends Employee {
    constructor(name, age, cpf, salary, password) {
        super(name, age, cpf, salary);
        this.password = password;
    }
    authenticate(password) {
        return this.password === password;
    }
    getBonus() {
        return this.getSalary() * 0.15;
    }
    getSalary() {
        return this.salary;
    }
    // Implementation of abstract methods inherited from Person
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getCpf() {
        return this.cpf;
    }
}
class Secretary extends Employee {
    constructor(name, age, cpf, salary) {
        super(name, age, cpf, salary);
    }
    getBonus() {
        return this.getSalary() * 0.5;
    }
    getSalary() {
        return this.salary;
    }
    // Implementation of abstract methods inherited from Person
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getCpf() {
        return this.cpf;
    }
}
class Client extends PhysicalPerson {
    constructor(name, age, cpf, balance, limit, overdraft, password) {
        super(name, age, cpf);
        this.balance = balance;
        this.limit = limit;
        this.overdraft = overdraft;
        this.password = password;
    }
    authenticate(password) {
        return this.password === password;
    }
    // Implementation of abstract methods inherited from Person
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getCpf() {
        return this.cpf;
    }
}
class Main {
    static main() {
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
    static printInfo(person) {
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
