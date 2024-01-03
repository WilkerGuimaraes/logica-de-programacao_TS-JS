class Person {
  private name: string;
  private address: string;
  private phone: string;

  constructor(name?: any, address?: any, phone?: any) {
    this.name = name || undefined;
    this.address = address || undefined;
    this.phone = phone || undefined;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  getPhone(): string {
    return this.phone;
  }

  setPhone(phone: string): void {
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
  private creditValue: number;
  private debtValue: number;

  constructor(
    creditValue: number,
    debtValue: number,
    name?: any,
    address?: any,
    phone?: any
  ) {
    super(name, address, phone);
    this.creditValue = creditValue;
    this.debtValue = debtValue;
  }

  getCreditValue(): number {
    return this.creditValue;
  }

  setCreditValue(creditValue: number): void {
    this.creditValue = creditValue;
  }

  getDebtValue(): number {
    return this.debtValue;
  }

  setDebtValue(debtValue: number): void {
    this.debtValue = debtValue;
  }

  getBalance(): number {
    return this.creditValue - this.debtValue;
  }
}

// Example of using the Supplier class
const supplier = new Supplier(
  5000,
  2000,
  "Supplier 02",
  "Street B, 456",
  "987654321"
);

console.log("\n");
console.log(`Name: ${supplier.getName()}`);
console.log(`Address: ${supplier.getAddress()}`);
console.log(`Phone: ${supplier.getPhone()}`);
console.log(`Credit Value: ${supplier.getCreditValue()}`);
console.log(`Debt Value: ${supplier.getDebtValue()}`);
console.log(`Balance: ${supplier.getBalance()}`);

class Employee extends Person {
  private sectorCode: number;
  private baseSalary: number;
  private tax: number;

  constructor(
    sectorCode: number,
    baseSalary: number,
    tax: number,
    name?: any,
    address?: any,
    phone?: any
  ) {
    super(name, address, phone);
    this.sectorCode = sectorCode;
    this.baseSalary = baseSalary;
    this.tax = tax;
  }

  getSectorCode(): number {
    return this.sectorCode;
  }

  setSectorCode(sectorCode: number): void {
    this.sectorCode = sectorCode;
  }

  getBaseSalary(): number {
    return this.baseSalary;
  }

  setBaseSalary(baseSalary: number): void {
    this.baseSalary = baseSalary;
  }

  getTax(): number {
    return this.tax;
  }

  setTax(tax: number): void {
    this.tax = tax;
  }

  calculateSalary(): number {
    const netSalary = this.baseSalary * ((100 - this.tax) / 100);
    return netSalary;
  }
}

const employee = new Employee(1, 3000, 10, "Matheus", "Street A", "123456789");

console.log("\n");
console.log(`Employee Name: ${employee.getName()}`);
console.log(`Employee Salary: $${employee.calculateSalary()}`);

class Administrator extends Employee {
  private assistanceCost: number;

  constructor(
    assistanceCost: number,
    sectorCode: number,
    baseSalary: number,
    tax: number,
    name?: any,
    address?: any,
    phone?: any
  ) {
    super(sectorCode, baseSalary, tax, name, address, phone);
    this.assistanceCost = assistanceCost;
  }

  getAssistanceCost(): number {
    return this.assistanceCost;
  }

  setAssistanceCost(assistanceCost: number): void {
    this.assistanceCost = assistanceCost;
  }

  calculateSalary(): number {
    const employeeSalary = super.getBaseSalary();
    const administratorSalary = employeeSalary + this.assistanceCost;
    return administratorSalary;
  }
}

const administrator = new Administrator(
  500,
  2,
  4000,
  12,
  "Maria",
  "Street B",
  "847592038"
);

console.log("\n");
console.log(`Administrator's Name: ${administrator.getName()}`);
console.log(`Administrator's Salary: ${administrator.calculateSalary()}`);

class Operator extends Employee {
  private productionValue: number;
  private commission: number;

  constructor(
    productionValue: number,
    commission: number,
    sectorCode: number,
    baseSalary: number,
    tax: number,
    name?: any,
    address?: any,
    phone?: any
  ) {
    super(sectorCode, baseSalary, tax, name, address, phone);
    this.productionValue = productionValue;
    this.commission = commission;
  }

  getProductionValue(): number {
    return this.productionValue;
  }

  setProductionValue(productionValue: number): void {
    this.productionValue = productionValue;
  }

  getCommission(): number {
    return this.commission;
  }

  setCommission(commission: number): void {
    this.commission = commission;
  }

  calculateSalary(): number {
    const employeeSalary = super.calculateSalary();
    const workerSalary =
      employeeSalary + (this.productionValue * this.commission) / 100;
    return workerSalary;
  }
}

const worker = new Operator(
  50000,
  5,
  3,
  3000,
  10,
  "Marcos",
  "Street D",
  "283746589"
);

console.log("\n");
console.log(`Operator's Name: ${worker.getName()}`);
console.log(`Operator's Salary: ${worker.calculateSalary()}`);

class Salesperson extends Employee {
  private salesValue: number;
  private commission: number;

  constructor(
    salesValue: number,
    commission: number,
    sectorCode: number,
    baseSalary: number,
    tax: number,
    name?: any,
    address?: any,
    phone?: any
  ) {
    super(sectorCode, baseSalary, tax, name, address, phone);
    this.salesValue = salesValue;
    this.commission = commission;
  }

  getSalesValue(): number {
    return this.salesValue;
  }

  setSalesValue(salesValue: number): void {
    this.salesValue = salesValue;
  }

  getCommission(): number {
    return this.commission;
  }

  setCommission(commission: number): void {
    this.commission = commission;
  }

  calculateSalary(): number {
    const employeeSalary = super.calculateSalary();
    const salespersonSalary =
      employeeSalary + (this.salesValue * this.commission) / 100;
    return salespersonSalary;
  }
}

const salesperson = new Salesperson(
  80000,
  4,
  4,
  3500,
  12,
  "Jane",
  "Street E",
  "748392118"
);

console.log("\n");
console.log(`Salesperson's Name: ${salesperson.getName()}`);
console.log(`Salesperson's Salary: ${salesperson.calculateSalary()}`);
