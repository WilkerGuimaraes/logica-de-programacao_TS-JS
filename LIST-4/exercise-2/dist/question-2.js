"use strict";
class Ticket {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    printValue() {
        console.log(`Ticket price: $${this.value}`);
    }
}
class VIP extends Ticket {
    constructor(value, additional) {
        super(value);
        this.additional = additional;
    }
    getVIPTicketValue() {
        return super.getValue() + this.additional;
    }
}
class Normal extends Ticket {
    constructor(value) {
        super(value);
    }
    printTicketType() {
        console.log("Normal Ticket.");
    }
}
class LowerBox extends VIP {
    constructor(value, additional, location) {
        super(value, additional);
        this.location = location;
    }
    getLocation() {
        return this.location;
    }
    printLocation() {
        console.log(`Location: ${this.location}`);
    }
}
class UpperBox extends VIP {
    constructor(value, additional) {
        super(value, additional);
    }
}
class BuyTicket {
    static main() {
        const readlineSync = require("readline-sync");
        const choice = parseInt(readlineSync.question("Type 1 to buy a normal ticket or type 2 for VIP ticket: "));
        if (choice === 1) {
            const normalTicket = new Normal(150);
            normalTicket.printTicketType();
            normalTicket.printValue();
        }
        else if (choice === 2) {
            const boxChoice = parseInt(readlineSync.question("Type 1 for upper box or type 2 for lower box: "));
            const VIPTicketPrice = 200;
            if (boxChoice === 1) {
                const additional = 50;
                const upperBox = new UpperBox(VIPTicketPrice, additional);
                upperBox.printValue();
                console.log(`Additional value: $${additional}`);
                console.log(`Total ticket value: $${upperBox.getVIPTicketValue()}`);
            }
            else if (boxChoice === 2) {
                const location = "Section B";
                const additional = 0;
                const lowerBox = new LowerBox(VIPTicketPrice, additional, location);
                lowerBox.printValue();
                lowerBox.printLocation();
            }
            else {
                console.log("Invalid choice! Program terminated.");
            }
        }
        else {
            console.log("Invalid choice! Program terminated.");
        }
    }
}
BuyTicket.main();
