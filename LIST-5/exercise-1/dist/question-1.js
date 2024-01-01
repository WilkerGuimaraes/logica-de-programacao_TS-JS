"use strict";
class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    getName() {
        return this.name;
    }
    getLastName() {
        return this.lastName;
    }
    setName(name) {
        this.name = name;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
}
class Employee extends Person {
    constructor(name, lastName, registrationNumber, salary) {
        super(name, lastName);
        this.registrationNumber = registrationNumber;
        this.salary = Math.max(0, salary);
    }
    getRegistrationNumber() {
        return this.registrationNumber;
    }
    setRegistrationNumber(registrationNumber) {
        this.registrationNumber = registrationNumber;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(newSalary) {
        this.salary = Math.max(0, newSalary);
    }
    getSalaryFirstInstallment() {
        return this.salary * 0.6;
    }
    getSalarySecondInstallment() {
        return this.salary * 0.4;
    }
}
class Professor extends Employee {
    getSalaryFirstInstallment() {
        return this.getSalary();
    }
    getSalarySecondInstallment() {
        return 0;
    }
}
class UsePerson {
    static main() {
        const person1 = new Person("José", "Manoel");
        const person2 = new Employee("Leandro", "Charles", 0, 2000.0);
        const person3 = new Professor("Rita", "Cassia", 0, 500.0);
        console.log(`Person1's Full Name: ${person1.getFullName()}`);
        console.log(`Person2's Full Name: ${person2.getFullName()}`);
        console.log(`Person3's Full Name: ${person3.getFullName()}`);
        console.log(`\nPerson2's Salary (First Installment): ${person2.getSalaryFirstInstallment()}`);
        console.log(`Person2's Salary (Second Installment): ${person2.getSalarySecondInstallment()}`);
        console.log(`\nPerson3's Salary (First Installment): ${person3.getSalaryFirstInstallment()}`);
        console.log(`Person3's Salary (Second Installment): ${person3.getSalarySecondInstallment()}`);
    }
}
UsePerson.main();
