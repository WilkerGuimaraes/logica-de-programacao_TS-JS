"use strict";
class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    calcularArea() {
        return this.altura * this.largura;
    }
    calcularPerimetro() {
        return 2 * (this.altura + this.largura);
    }
}
class RetanguloTeste {
    static main() {
        const retangulo = new Retangulo(2, 4);
        console.log(`Área do retângulo: ${retangulo.calcularArea()}`);
        console.log(`Perímetro do retângulo: ${retangulo.calcularPerimetro()}`);
    }
}
RetanguloTeste.main();
