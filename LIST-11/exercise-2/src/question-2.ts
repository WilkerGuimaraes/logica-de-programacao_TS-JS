interface Stock {}

interface DAO {
  insert(): void;
  delete(): void;
  find(): void;
}

class Client implements DAO {
  private code: number;
  private name: string;

  constructor(code: number, name: string) {
    this.code = code;
    this.name = name;
  }

  insert(): void {
    console.log(`Client ${this.name} inserted into the database.`);
  }

  delete(): void {
    console.log(`Client ${this.name} deleted from the database.`);
  }

  find(): void {
    console.log(`Client ${this.name} found in the database.`);
  }
}

class Supplier implements DAO {
  private cnpj: string;
  private businessName: string;

  constructor(cnpj: string, businessName: string) {
    this.cnpj = cnpj;
    this.businessName = businessName;
  }

  insert(): void {
    console.log(`Supplier ${this.businessName} inserted into the database.`);
  }

  delete(): void {
    console.log(`Supplier ${this.businessName} deleted from the database.`);
  }

  find(): void {
    console.log(`Supplier ${this.businessName} found in the database.`);
  }
}

class Product implements DAO, Stock {
  private number: number;
  private description: string;

  constructor(number: number, description: string) {
    this.number = number;
    this.description = description;
  }

  insert(): void {
    console.log(`Product ${this.description} inserted into the database.`);
  }

  delete(): void {
    console.log(`Product ${this.description} deleted from the database.`);
  }

  find(): void {
    console.log(`Product ${this.description} found in the database.`);
  }

  decreaseStock(): void {
    console.log(`Decreasing the stock of product ${this.description}.`);
  }
}

class Main {
  static main(): void {
    const client = new Client(1, "Client A");
    const supplier = new Supplier("123456789", "Supplier B");
    const product = new Product(101, "Product C");

    client.insert();
    client.delete();
    client.find();

    supplier.insert();
    supplier.delete();
    supplier.find();

    product.insert();
    product.delete();
    product.find();
    product.decreaseStock();
  }
}

Main.main();
