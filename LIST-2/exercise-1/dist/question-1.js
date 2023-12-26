"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    toString() {
        return `Name: ${this.name}, Age: ${this.age} years.`;
    }
}
class PersonTest {
    static main() {
        const person = new Person("Wilker", 24);
        console.log(person.toString());
    }
}
PersonTest.main();
