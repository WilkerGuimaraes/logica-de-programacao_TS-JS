class Ticket {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  printValue(): void {
    console.log(`Ticket price: $${this.value}`);
  }
}

class VIP extends Ticket {
  private additional: number;

  constructor(value: number, additional: number) {
    super(value);
    this.additional = additional;
  }

  getVIPTicketValue(): number {
    return super.getValue() + this.additional;
  }
}

class Normal extends Ticket {
  constructor(value: number) {
    super(value);
  }

  printTicketType(): void {
    console.log("Normal Ticket.");
  }
}

class LowerBox extends VIP {
  private location: string;

  constructor(value: number, additional: number, location: string) {
    super(value, additional);
    this.location = location;
  }

  getLocation(): string {
    return this.location;
  }

  printLocation(): void {
    console.log(`Location: ${this.location}`);
  }
}

class UpperBox extends VIP {
  constructor(value: number, additional: number) {
    super(value, additional);
  }
}

class BuyTicket {
  static main(): void {
    const readlineSync = require("readline-sync");
    const choice = parseInt(
      readlineSync.question(
        "Type 1 to buy a normal ticket or type 2 for VIP ticket: "
      )
    );

    if (choice === 1) {
      const normalTicket = new Normal(150);
      normalTicket.printTicketType();
      normalTicket.printValue();
    } else if (choice === 2) {
      const boxChoice = parseInt(
        readlineSync.question("Type 1 for upper box or type 2 for lower box: ")
      );
      const VIPTicketPrice = 200;

      if (boxChoice === 1) {
        const additional = 50;
        const upperBox = new UpperBox(VIPTicketPrice, additional);
        upperBox.printValue();
        console.log(`Additional value: $${additional}`);
        console.log(`Total ticket value: $${upperBox.getVIPTicketValue()}`);
      } else if (boxChoice === 2) {
        const location = "Section B";
        const additional = 0;
        const lowerBox = new LowerBox(VIPTicketPrice, additional, location);
        lowerBox.printValue();
        lowerBox.printLocation();
      } else {
        console.log("Invalid choice! Program terminated.");
      }
    } else {
      console.log("Invalid choice! Program terminated.");
    }
  }
}

BuyTicket.main();
