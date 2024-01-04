abstract class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  abstract getDescription(): string;
}

class Employee extends Person {
  private salary: number;

  constructor(name: string, salary: number) {
    super(name);
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }

  getDescription(): string {
    return `Name: ${super.getName()}\nSalary: ${this.salary}`;
  }

  updateSalary(byPercentage: number): void {
    this.salary += this.salary * (byPercentage / 100);
  }
}

class Student extends Person {
  private studyArea: string;

  constructor(name: string, studyArea: string) {
    super(name);
    this.studyArea = studyArea;
  }

  getDescription(): string {
    return `Student's Name: ${super.getName()}\nStudy Area: ${this.studyArea}`;
  }
}

class PersonTest {
  static main(): void {
    const people: Person[] = [
      new Employee("Mario", 5000),
      new Student("Jane", "Computer Science"),
    ];

    for (const person of people) {
      console.log(`${person.getDescription()}`);
    }
  }
}

PersonTest.main();
