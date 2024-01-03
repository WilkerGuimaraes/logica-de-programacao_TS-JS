"use strict";
class Person {
    constructor(name, address, phone) {
        this.name = name || undefined;
        this.address = address || undefined;
        this.phone = phone || undefined;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
}
// Instance examples
const person1 = new Person("John", "Street A, 123", "123456789");
const person2 = new Person(); // Instance with default values (undefined)
const person3 = new Person("Maria"); // Instance with defined name
const person4 = new Person(undefined, "Street B, 456"); // Instance with defined address
const person5 = new Person(undefined, undefined, "987654321"); // Instance with defined phone
// Displaying instance data
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
// Using `set` methods to set the name and address of person2 and the name of person5
person2.setName("Dolores");
person2.setAddress("Street C, 789");
person5.setName("Carlos");
// Calling person2 and person5 with the new attributes
console.log("-------------------------------------------");
console.log(person2);
console.log(person5);
class Supplier extends Person {
    constructor(creditValue, debtValue, name, address, phone) {
        super(name, address, phone);
        this.creditValue = creditValue;
        this.debtValue = debtValue;
    }
    getCreditValue() {
        return this.creditValue;
    }
    setCreditValue(creditValue) {
        this.creditValue = creditValue;
    }
    getDebtValue() {
        return this.debtValue;
    }
    setDebtValue(debtValue) {
        this.debtValue = debtValue;
    }
    getBalance() {
        return this.creditValue - this.debtValue;
    }
}
// Example of using the Supplier class
const supplier = new Supplier(5000, 2000, "Supplier 02", "Street B, 456", "987654321");
console.log("\n");
console.log(`Name: ${supplier.getName()}`);
console.log(`Address: ${supplier.getAddress()}`);
console.log(`Phone: ${supplier.getPhone()}`);
console.log(`Credit Value: ${supplier.getCreditValue()}`);
console.log(`Debt Value: ${supplier.getDebtValue()}`);
console.log(`Balance: ${supplier.getBalance()}`);
class Employee extends Person {
    constructor(sectorCode, baseSalary, tax, name, address, phone) {
        super(name, address, phone);
        this.sectorCode = sectorCode;
        this.baseSalary = baseSalary;
        this.tax = tax;
    }
    getSectorCode() {
        return this.sectorCode;
    }
    setSectorCode(sectorCode) {
        this.sectorCode = sectorCode;
    }
    getBaseSalary() {
        return this.baseSalary;
    }
    setBaseSalary(baseSalary) {
        this.baseSalary = baseSalary;
    }
    getTax() {
        return this.tax;
    }
    setTax(tax) {
        this.tax = tax;
    }
    calculateSalary() {
        const netSalary = this.baseSalary * ((100 - this.tax) / 100);
        return netSalary;
    }
}
const employee = new Employee(1, 3000, 10, "Matheus", "Street A", "123456789");
console.log("\n");
console.log(`Employee Name: ${employee.getName()}`);
console.log(`Employee Salary: $${employee.calculateSalary()}`);
class Administrator extends Employee {
    constructor(assistanceCost, sectorCode, baseSalary, tax, name, address, phone) {
        super(sectorCode, baseSalary, tax, name, address, phone);
        this.assistanceCost = assistanceCost;
    }
    getAssistanceCost() {
        return this.assistanceCost;
    }
    setAssistanceCost(assistanceCost) {
        this.assistanceCost = assistanceCost;
    }
    calculateSalary() {
        const employeeSalary = super.getBaseSalary();
        const administratorSalary = employeeSalary + this.assistanceCost;
        return administratorSalary;
    }
}
const administrator = new Administrator(500, 2, 4000, 12, "Maria", "Street B", "847592038");
console.log("\n");
console.log(`Administrator's Name: ${administrator.getName()}`);
console.log(`Administrator's Salary: ${administrator.calculateSalary()}`);
class Operator extends Employee {
    constructor(productionValue, commission, sectorCode, baseSalary, tax, name, address, phone) {
        super(sectorCode, baseSalary, tax, name, address, phone);
        this.productionValue = productionValue;
        this.commission = commission;
    }
    getProductionValue() {
        return this.productionValue;
    }
    setProductionValue(productionValue) {
        this.productionValue = productionValue;
    }
    getCommission() {
        return this.commission;
    }
    setCommission(commission) {
        this.commission = commission;
    }
    calculateSalary() {
        const employeeSalary = super.calculateSalary();
        const workerSalary = employeeSalary + (this.productionValue * this.commission) / 100;
        return workerSalary;
    }
}
const worker = new Operator(50000, 5, 3, 3000, 10, "Marcos", "Street D", "283746589");
console.log("\n");
console.log(`Operator's Name: ${worker.getName()}`);
console.log(`Operator's Salary: ${worker.calculateSalary()}`);
class Salesperson extends Employee {
    constructor(salesValue, commission, sectorCode, baseSalary, tax, name, address, phone) {
        super(sectorCode, baseSalary, tax, name, address, phone);
        this.salesValue = salesValue;
        this.commission = commission;
    }
    getSalesValue() {
        return this.salesValue;
    }
    setSalesValue(salesValue) {
        this.salesValue = salesValue;
    }
    getCommission() {
        return this.commission;
    }
    setCommission(commission) {
        this.commission = commission;
    }
    calculateSalary() {
        const employeeSalary = super.calculateSalary();
        const salespersonSalary = employeeSalary + (this.salesValue * this.commission) / 100;
        return salespersonSalary;
    }
}
const salesperson = new Salesperson(80000, 4, 4, 3500, 12, "Jane", "Street E", "748392118");
console.log("\n");
console.log(`Salesperson's Name: ${salesperson.getName()}`);
console.log(`Salesperson's Salary: ${salesperson.calculateSalary()}`);
