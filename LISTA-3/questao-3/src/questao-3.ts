class Vendas {
  static descontoPadrao: number = 0.3;

  private desconto: number;

  constructor() {
    this.desconto = Vendas.descontoPadrao;
  }

  obterTaxaDeDesconto(tipoDesconto: number): number {
    return tipoDesconto === 1 ? 0.1 : this.desconto;
  }

  calcularValorComDesconto(
    valorDaCompra: number,
    tipoDesconto: number
  ): number {
    const taxaDeDessconto = this.obterTaxaDeDesconto(tipoDesconto);
    const valorComDesconto = valorDaCompra * (1 - taxaDeDessconto);
    return valorComDesconto;
  }
}

const venda = new Vendas();

const valorDaCompra = 100;

const tipoDesconto = 1;

const valorComDesconto = venda.calcularValorComDesconto(
  valorDaCompra,
  tipoDesconto
);
console.log(`Valor do produto: R$${valorDaCompra}`);
console.log(`Valor com desconto: R$${valorComDesconto}`);
