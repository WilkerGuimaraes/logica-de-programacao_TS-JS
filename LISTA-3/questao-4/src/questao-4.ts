class Pedido {
  static numeroAtual = 1;

  private numero: number;
  private data: string;
  private cliente: string;
  private valor: number;

  constructor(data: string, cliente: string, valor: number) {
    this.numero = Pedido.numeroAtual++;
    this.data = data;
    this.cliente = cliente;
    this.valor = valor;
  }

  getNumero(): number {
    return this.numero;
  }

  exibirDetalhes(): void {
    console.log(
      `Número do pedido: ${this.numero} | Data: ${this.data} | Cliente: ${this.cliente} | Valor: R$${this.valor}`
    );
  }
}

const pedido1 = new Pedido("01-03-2023", "Cliente A", 100);
const pedido2 = new Pedido("02-03-2023", "Cliente B", 160);
const pedido3 = new Pedido("03-03-2023", "Cliente C", 230);

pedido1.exibirDetalhes();
pedido2.exibirDetalhes();
pedido3.exibirDetalhes();
