class Property {
  private address: string;
  private price: number;

  constructor(address: string, price: number) {
    this.address = address;
    this.price = price;
  }

  getAddress(): string {
    return this.address;
  }

  getPrice(): number {
    return this.price;
  }

  printAddress(): void {
    console.log(`Address: ${this.address}`);
  }

  printPrice(): void {
    console.log(`Property price: $${this.price}`);
  }
}

class NewProperty extends Property {
  private additional: number;

  constructor(address: string, price: number, additional: number) {
    super(address, price);
    this.additional = additional;
  }

  getAdditional(): number {
    return this.additional;
  }

  printAdditionalValue(): void {
    console.log(`Additional value: $${this.additional}`);
  }

  printFinalValue(): void {
    const finalValue = super.getPrice() + this.additional;
    console.log(`Final property value: $${finalValue}`);
  }
}

class UsedProperty extends Property {
  private discount: number;

  constructor(address: string, price: number, discount: number) {
    super(address, price);
    this.discount = discount;
  }

  getDiscount(): number {
    return this.discount;
  }

  printDiscountValue(): void {
    console.log(`Discount value: $${this.discount}`);
  }

  printFinalValue(): void {
    const finalValue = super.getPrice() - this.discount;
    console.log(`Final property value: $${finalValue}`);
  }
}

class PropertySale {
  static main(): void {
    const basePrice = 100000.0;

    const readlineSync = require("readline-sync");
    const choice = parseInt(
      readlineSync.question(
        "Type 1 for a new property or type 2 for a used property: "
      )
    );

    if (choice === 1) {
      const newPropertyAddress = "Street A, 123";
      const additionalValue = 20000.0;
      const newProperty = new NewProperty(
        newPropertyAddress,
        basePrice,
        additionalValue
      );
      console.log("\nYou have just acquired a new property!");
      newProperty.printAddress();
      newProperty.printPrice();
      newProperty.printAdditionalValue();
      newProperty.printFinalValue();
    } else if (choice === 2) {
      const usedPropertyAddress = "Street B, 456";
      const discountValue = 15000.0;
      const usedProperty = new UsedProperty(
        usedPropertyAddress,
        basePrice,
        discountValue
      );
      console.log("\nYou have just acquired a used property!");
      usedProperty.printAddress();
      usedProperty.printPrice();
      usedProperty.printDiscountValue();
      usedProperty.printFinalValue();
    } else {
      console.log("Invalid choice! Program terminated.");
    }
  }
}

PropertySale.main();
