class Rectangle {
  private height: number;
  private width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  calculateArea(): number {
    return this.height * this.width;
  }

  calculatePerimeter(): number {
    return 2 * (this.height + this.width);
  }
}

class TestRectangle {
  static main(): void {
    const rectangle = new Rectangle(2, 4);

    console.log(`Area of the rectangle: ${rectangle.calculateArea()}`);
    console.log(
      `Perimeter of the rectangle: ${rectangle.calculatePerimeter()}`
    );
  }
}

TestRectangle.main();
