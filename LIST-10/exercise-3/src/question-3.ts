interface Commission {
  COMMISSION_RATE: number;

  setSales(sales: number): void;
}

abstract class Employee {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract printPay(): void;
  abstract getPay(): number;
}

class ByCommission extends Employee implements Commission {
  private sales: number;
  readonly COMMISSION_RATE: number = 0.1;

  constructor(sales: number, name: string) {
    super(name);
    this.sales = sales;
  }

  setSales(sales: number): void {
    this.sales = sales;
  }

  printPay(): void {
    console.log(`Payment for ${this.name} (ByCommission): ${this.getPay()}`);
  }

  getPay(): number {
    return this.sales * this.COMMISSION_RATE;
  }
}

class ByHour extends Employee {
  private hourlyRate: number;
  private hoursWorked: number;

  constructor(hourlyRate: number, hoursWorked: number, name: string) {
    super(name);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  getHourlyRate(): number {
    return this.hourlyRate;
  }

  setHourlyRate(hourlyRate: number): void {
    this.hourlyRate = hourlyRate;
  }

  getHoursWorked(): number {
    return this.hoursWorked;
  }

  setHoursWorked(hoursWorked: number): void {
    this.hoursWorked = hoursWorked;
  }

  printPay(): void {
    console.log(`Payment for ${this.name} (ByHour): ${this.getPay()}`);
  }

  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

class ByHourAndCommission extends ByHour implements Commission {
  private sales: number;
  readonly COMMISSION_RATE: number = 0.1;

  constructor(
    sales: number,
    hourlyRate: number,
    hoursWorked: number,
    name: string
  ) {
    super(hourlyRate, hoursWorked, name);
    this.sales = sales;
  }

  setSales(sales: number): void {
    this.sales = sales;
  }

  printPay(): void {
    console.log(
      `Payment for ${this.name} (ByHourAndCommission): ${this.getPay()}`
    );
  }

  getPay(): number {
    return super.getPay() + this.sales * this.COMMISSION_RATE;
  }
}

class Payroll {
  private employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  calculatePayroll(): void {
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
