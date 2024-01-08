"use strict";
class Client {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
    insert() {
        console.log(`Client ${this.name} inserted into the database.`);
    }
    delete() {
        console.log(`Client ${this.name} deleted from the database.`);
    }
    find() {
        console.log(`Client ${this.name} found in the database.`);
    }
}
class Supplier {
    constructor(cnpj, businessName) {
        this.cnpj = cnpj;
        this.businessName = businessName;
    }
    insert() {
        console.log(`Supplier ${this.businessName} inserted into the database.`);
    }
    delete() {
        console.log(`Supplier ${this.businessName} deleted from the database.`);
    }
    find() {
        console.log(`Supplier ${this.businessName} found in the database.`);
    }
}
class Product {
    constructor(number, description) {
        this.number = number;
        this.description = description;
    }
    insert() {
        console.log(`Product ${this.description} inserted into the database.`);
    }
    delete() {
        console.log(`Product ${this.description} deleted from the database.`);
    }
    find() {
        console.log(`Product ${this.description} found in the database.`);
    }
    decreaseStock() {
        console.log(`Decreasing the stock of product ${this.description}.`);
    }
}
class Main {
    static main() {
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
