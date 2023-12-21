"use strict";
class Pedido {
    constructor(data, cliente, valor) {
        this.numero = Pedido.numeroAtual++;
        this.data = data;
        this.cliente = cliente;
        this.valor = valor;
    }
    getNumero() {
        return this.numero;
    }
    exibirDetalhes() {
        console.log(`Número do pedido: ${this.numero} | Data: ${this.data} | Cliente: ${this.cliente} | Valor: R$${this.valor}`);
    }
}
Pedido.numeroAtual = 1;
const pedido1 = new Pedido("01-03-2023", "Cliente A", 100);
const pedido2 = new Pedido("02-03-2023", "Cliente B", 160);
const pedido3 = new Pedido("03-03-2023", "Cliente C", 230);
pedido1.exibirDetalhes();
pedido2.exibirDetalhes();
pedido3.exibirDetalhes();
