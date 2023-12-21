class Retangulo {
  private altura: number;
  private largura: number;

  constructor(altura: number, largura: number) {
    this.altura = altura;
    this.largura = largura;
  }

  calcularArea(): number {
    return this.altura * this.largura;
  }

  calcularPerimetro(): number {
    return 2 * (this.altura + this.largura);
  }
}

class RetanguloTeste {
  static main(): void {
    const retangulo = new Retangulo(2, 4);

    console.log(`Área do retângulo: ${retangulo.calcularArea()}`);
    console.log(`Perímetro do retângulo: ${retangulo.calcularPerimetro()}`);
  }
}

RetanguloTeste.main();
