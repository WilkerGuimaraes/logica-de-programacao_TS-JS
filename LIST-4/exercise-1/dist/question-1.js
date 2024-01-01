"use strict";
class Property {
    constructor(address, price) {
        this.address = address;
        this.price = price;
    }
    getAddress() {
        return this.address;
    }
    getPrice() {
        return this.price;
    }
    printAddress() {
        console.log(`Address: ${this.address}`);
    }
    printPrice() {
        console.log(`Property price: $${this.price}`);
    }
}
class NewProperty extends Property {
    constructor(address, price, additional) {
        super(address, price);
        this.additional = additional;
    }
    getAdditional() {
        return this.additional;
    }
    printAdditionalValue() {
        console.log(`Additional value: $${this.additional}`);
    }
    printFinalValue() {
        const finalValue = super.getPrice() + this.additional;
        console.log(`Final property value: $${finalValue}`);
    }
}
class UsedProperty extends Property {
    constructor(address, price, discount) {
        super(address, price);
        this.discount = discount;
    }
    getDiscount() {
        return this.discount;
    }
    printDiscountValue() {
        console.log(`Discount value: $${this.discount}`);
    }
    printFinalValue() {
        const finalValue = super.getPrice() - this.discount;
        console.log(`Final property value: $${finalValue}`);
    }
}
class PropertySale {
    static main() {
        const basePrice = 100000.0;
        const readlineSync = require("readline-sync");
        const choice = parseInt(readlineSync.question("Type 1 for a new property or type 2 for a used property: "));
        if (choice === 1) {
            const newPropertyAddress = "Street A, 123";
            const additionalValue = 20000.0;
            const newProperty = new NewProperty(newPropertyAddress, basePrice, additionalValue);
            console.log("\nYou have just acquired a new property!");
            newProperty.printAddress();
            newProperty.printPrice();
            newProperty.printAdditionalValue();
            newProperty.printFinalValue();
        }
        else if (choice === 2) {
            const usedPropertyAddress = "Street B, 456";
            const discountValue = 15000.0;
            const usedProperty = new UsedProperty(usedPropertyAddress, basePrice, discountValue);
            console.log("\nYou have just acquired a used property!");
            usedProperty.printAddress();
            usedProperty.printPrice();
            usedProperty.printDiscountValue();
            usedProperty.printFinalValue();
        }
        else {
            console.log("Invalid choice! Program terminated.");
        }
    }
}
PropertySale.main();
