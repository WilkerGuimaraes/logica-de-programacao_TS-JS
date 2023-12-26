"use strict";
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calculateArea() {
        return this.height * this.width;
    }
    calculatePerimeter() {
        return 2 * (this.height + this.width);
    }
}
class TestRectangle {
    static main() {
        const rectangle = new Rectangle(2, 4);
        console.log(`Area of the rectangle: ${rectangle.calculateArea()}`);
        console.log(`Perimeter of the rectangle: ${rectangle.calculatePerimeter()}`);
    }
}
TestRectangle.main();
