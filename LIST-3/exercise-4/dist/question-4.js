"use strict";
class Order {
    constructor(date, client, value) {
        this.num = Order.actualNumber++;
        this.date = date;
        this.client = client;
        this.value = value;
    }
    getNumber() {
        return this.num;
    }
    showDetails() {
        console.log(`Request number: ${this.num} | Date: ${this.date} | Client: ${this.client} | Value: R$${this.value}`);
    }
}
Order.actualNumber = 1;
const request1 = new Order("2023-03-01", "Client A", 100);
const request2 = new Order("2023-03-02", "Client B", 160);
const request3 = new Order("2023-03-03", "Client C", 230);
request1.showDetails();
request2.showDetails();
request3.showDetails();
