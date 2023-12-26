"use strict";
class Sector {
    constructor(sectorName) {
        this.sectorCode = Sector.sectorCounter++;
        this.sectorName = sectorName;
    }
    getSectorCode() {
        return this.sectorCode;
    }
    getSectorName() {
        return this.sectorName;
    }
}
Sector.sectorCounter = 1;
class Employee {
    constructor(name, age, salary, sector) {
        this.registration = Employee.nextRegistration++;
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.sector = sector;
    }
    getRegistration() {
        return this.registration;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getSalary() {
        return this.salary;
    }
    getSector() {
        return this.sector;
    }
    toString() {
        console.log(`Registration: ${this.registration} | Name: ${this.name} | Age: ${this.age} | Salary: ${this.salary} | Sector: ${this.sector.getSectorCode()}-${this.sector.getSectorName()}`);
    }
}
Employee.nextRegistration = 1;
class EmployeeControl {
    static main() {
        const administrationSector = new Sector("Administration");
        const accountingSector = new Sector("Accounting");
        const ITSector = new Sector("I.T.");
        const employee1 = new Employee("Carlos", 20, 1200.0, ITSector);
        const employee2 = new Employee("Maria", 25, 3500.0, administrationSector);
        const employee3 = new Employee("Diego", 30, 875.79, accountingSector);
        employee1.toString();
        employee2.toString();
        employee3.toString();
    }
}
EmployeeControl.main();
