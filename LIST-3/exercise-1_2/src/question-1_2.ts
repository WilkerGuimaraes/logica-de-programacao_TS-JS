class Sector {
  static sectorCounter = 1;

  private sectorCode: number;
  private sectorName: string;

  constructor(sectorName: string) {
    this.sectorCode = Sector.sectorCounter++;
    this.sectorName = sectorName;
  }

  getSectorCode(): number {
    return this.sectorCode;
  }

  getSectorName(): string {
    return this.sectorName;
  }
}

class Employee {
  static nextRegistration: number = 1;

  private registration: number;
  private name: string;
  private age: number;
  private salary: number;

  private sector: Sector;

  constructor(name: string, age: number, salary: number, sector: Sector) {
    this.registration = Employee.nextRegistration++;
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.sector = sector;
  }

  getRegistration(): number {
    return this.registration;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getSalary(): number {
    return this.salary;
  }

  getSector(): Sector {
    return this.sector;
  }

  toString(): void {
    console.log(
      `Registration: ${this.registration} | Name: ${this.name} | Age: ${
        this.age
      } | Salary: ${
        this.salary
      } | Sector: ${this.sector.getSectorCode()}-${this.sector.getSectorName()}`
    );
  }
}

class EmployeeControl {
  static main(): void {
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
