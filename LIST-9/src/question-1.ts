class SuperClass {
  protected n1: number;

  constructor(n1: number) {
    this.n1 = n1;
  }

  printNumber(): void {
    console.log(`Value of n1: ${this.n1}`);
  }
}

class SubClass extends SuperClass {
  protected n2: number;

  constructor(n1: number, n2: number) {
    super(n1);
    this.n2 = n2;
  }

  printNumber(): void {
    console.log(`Value of n2: ${this.n2}`);
  }
}

class Main {
  static main(): void {
    const objectSubClass = new SubClass(10, 20);

    objectSubClass.printNumber();
  }
}

Main.main();
