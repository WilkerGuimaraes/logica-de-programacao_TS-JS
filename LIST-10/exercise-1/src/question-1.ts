abstract class MathematicalOperation {
  abstract calculate(number1: number, number2: number): number;
}

class Addition extends MathematicalOperation {
  calculate(number1: number, number2: number): number {
    return number1 + number2;
  }
}

class Subtraction extends MathematicalOperation {
  calculate(number1: number, number2: number): number {
    return number1 - number2;
  }
}

class Accounts {
  static showCalculation(
    operation: MathematicalOperation,
    number1: number,
    number2: number
  ) {
    const result = operation.calculate(number1, number2);
    console.log(`Result of the operation: ${result}`);
  }
}

const additionOperation = new Addition();
Accounts.showCalculation(additionOperation, 10, 5);

const subtractionOperation = new Subtraction();
Accounts.showCalculation(subtractionOperation, 10, 5);
