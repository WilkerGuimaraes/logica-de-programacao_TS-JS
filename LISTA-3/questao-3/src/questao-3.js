"use strict";
class Vendas {
    constructor() {
        this.desconto = Vendas.descontoPadrao;
    }
    obterTaxaDeDesconto(tipoDesconto) {
        return tipoDesconto === 1 ? 0.1 : this.desconto;
    }
    calcularValorComDesconto(valorDaCompra, tipoDesconto) {
        const taxaDeDessconto = this.obterTaxaDeDesconto(tipoDesconto);
        const valorComDesconto = valorDaCompra * (1 - taxaDeDessconto);
        return valorComDesconto;
    }
}
Vendas.descontoPadrao = 0.3;
const venda = new Vendas();
const valorDaCompra = 100;
const tipoDesconto = 1;
const valorComDesconto = venda.calcularValorComDesconto(valorDaCompra, tipoDesconto);
console.log(`Valor do produto: R$${valorDaCompra}`);
console.log(`Valor com desconto: R$${valorComDesconto}`);
