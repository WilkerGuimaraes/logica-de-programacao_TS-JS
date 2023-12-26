class Order {
  static actualNumber = 1;

  private num: number;
  private date: string;
  private client: string;
  private value: number;

  constructor(date: string, client: string, value: number) {
    this.num = Order.actualNumber++;
    this.date = date;
    this.client = client;
    this.value = value;
  }

  getNumber(): number {
    return this.num;
  }

  showDetails(): void {
    console.log(
      `Request number: ${this.num} | Date: ${this.date} | Client: ${this.client} | Value: R$${this.value}`
    );
  }
}

const request1 = new Order("2023-03-01", "Client A", 100);
const request2 = new Order("2023-03-02", "Client B", 160);
const request3 = new Order("2023-03-03", "Client C", 230);

request1.showDetails();
request2.showDetails();
request3.showDetails();
