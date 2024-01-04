"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Employee extends Person {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    getDescription() {
        return `Name: ${super.getName()}\nSalary: ${this.salary}`;
    }
    updateSalary(byPercentage) {
        this.salary += this.salary * (byPercentage / 100);
    }
}
class Student extends Person {
    constructor(name, studyArea) {
        super(name);
        this.studyArea = studyArea;
    }
    getDescription() {
        return `Student's Name: ${super.getName()}\nStudy Area: ${this.studyArea}`;
    }
}
class PersonTest {
    static main() {
        const people = [
            new Employee("Mario", 5000),
            new Student("Jane", "Computer Science"),
        ];
        for (const person of people) {
            console.log(`${person.getDescription()}`);
        }
    }
}
PersonTest.main();
