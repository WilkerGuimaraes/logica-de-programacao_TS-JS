class Person {
  private name: String;
  private age: Number;

  constructor(name: String, age: Number) {
    this.name = name;
    this.age = age;
  }

  getName(): String {
    return this.name;
  }

  setName(name: String): void {
    this.name = name;
  }

  getAge(): Number {
    return this.age;
  }

  setAge(age: Number): void {
    this.age = age;
  }

  toString(): String {
    return `Name: ${this.name}, Age: ${this.age} years.`;
  }
}

class PersonTest {
  static main(): void {
    const person = new Person("Wilker", 24);

    console.log(person.toString());
  }
}

PersonTest.main();
