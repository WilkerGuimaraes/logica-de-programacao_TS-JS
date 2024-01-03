"use strict";
class SuperClass {
    constructor(n1) {
        this.n1 = n1;
    }
    printNumber() {
        console.log(`Value of n1: ${this.n1}`);
    }
}
class SubClass extends SuperClass {
    constructor(n1, n2) {
        super(n1);
        this.n2 = n2;
    }
    printNumber() {
        console.log(`Value of n2: ${this.n2}`);
    }
}
class Main {
    static main() {
        const objectSubClass = new SubClass(10, 20);
        objectSubClass.printNumber();
    }
}
Main.main();
