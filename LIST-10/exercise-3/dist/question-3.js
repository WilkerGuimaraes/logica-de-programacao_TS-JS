"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
}
class ByCommission extends Employee {
    constructor(sales, name) {
        super(name);
        this.COMMISSION_RATE = 0.1;
        this.sales = sales;
    }
    setSales(sales) {
        this.sales = sales;
    }
    printPay() {
        console.log(`Payment for ${this.name} (ByCommission): ${this.getPay()}`);
    }
    getPay() {
        return this.sales * this.COMMISSION_RATE;
    }
}
class ByHour extends Employee {
    constructor(hourlyRate, hoursWorked, name) {
        super(name);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getHourlyRate() {
        return this.hourlyRate;
    }
    setHourlyRate(hourlyRate) {
        this.hourlyRate = hourlyRate;
    }
    getHoursWorked() {
        return this.hoursWorked;
    }
    setHoursWorked(hoursWorked) {
        this.hoursWorked = hoursWorked;
    }
    printPay() {
        console.log(`Payment for ${this.name} (ByHour): ${this.getPay()}`);
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
class ByHourAndCommission extends ByHour {
    constructor(sales, hourlyRate, hoursWorked, name) {
        super(hourlyRate, hoursWorked, name);
        this.COMMISSION_RATE = 0.1;
        this.sales = sales;
    }
    setSales(sales) {
        this.sales = sales;
    }
    printPay() {
        console.log(`Payment for ${this.name} (ByHourAndCommission): ${this.getPay()}`);
    }
    getPay() {
        return super.getPay() + this.sales * this.COMMISSION_RATE;
    }
}
class Payroll {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    calculatePayroll() {
        for (const employee of this.employees) {
            employee.printPay();
        }
    }
}
// Example of usage
const payroll = new Payroll();
payroll.addEmployee(new ByCommission(1000, "John"));
payroll.addEmployee(new ByHour(20.0, 40, "Maria"));
payroll.addEmployee(new ByHourAndCommission(1500, 25.0, 35, "Carlos"));
payroll.calculatePayroll();
