"use strict";
class Imovel {
    constructor(endereco, preco) {
        this.endereco = endereco;
        this.preco = preco;
    }
    getEndereco() {
        return this.endereco;
    }
    getPreco() {
        return this.preco;
    }
    imprimirEndereco() {
        console.log(`Endereço: ${this.endereco}`);
    }
    imprimirPreco() {
        console.log(`Preço do imóvel: R$${this.preco}`);
    }
}
class Novo extends Imovel {
    constructor(endereco, preco, adicional) {
        super(endereco, preco);
        this.adicional = adicional;
    }
    getAdicional() {
        return this.adicional;
    }
    imprimirValorAdicional() {
        console.log(`Valor adicional: R$${this.adicional}`);
    }
    imprimirValorFinal() {
        const valorFinal = super.getPreco() + this.adicional;
        console.log(`Valor final do imóvel: R$${valorFinal}`);
    }
}
class Usado extends Imovel {
    constructor(endereco, preco, desconto) {
        super(endereco, preco);
        this.desconto = desconto;
    }
    getDesconto() {
        return this.desconto;
    }
    imprimirValorDesconto() {
        console.log(`Valor do desconto: R$${this.desconto}`);
    }
    imprimirValorFinal() {
        const valorFinal = super.getPreco() - this.desconto;
        console.log(`Valor final do imóvel: R$${valorFinal}`);
    }
}
class VendaImovel {
    static main() {
        const precoBase = 100000.0;
        const readlineSync = require("readline-sync");
        const escolha = parseInt(readlineSync.question("Digite 1 para imóvel novo ou digite 2 para imóvel usado: "));
        if (escolha === 1) {
            const enderecoImovelNovo = "Rua A, 123";
            const adicional = 20000.0;
            const imovelNovo = new Novo(enderecoImovelNovo, precoBase, adicional);
            console.log("\nVocê acabou de adquirir um imóvel novo!");
            imovelNovo.imprimirEndereco();
            imovelNovo.imprimirPreco();
            imovelNovo.imprimirValorAdicional();
            imovelNovo.imprimirValorFinal();
        }
        else if (escolha === 2) {
            const enderecoImovelUsado = "Rua B, 456";
            const desconto = 15000.0;
            const imovelUsado = new Usado(enderecoImovelUsado, precoBase, desconto);
            console.log("\nVocê acabou de adquirir um imóvel usado!");
            imovelUsado.imprimirEndereco();
            imovelUsado.imprimirPreco();
            imovelUsado.imprimirValorDesconto();
            imovelUsado.imprimirValorFinal();
        }
        else {
            console.log("Escolha inválida! Programa encerrado.");
        }
    }
}
VendaImovel.main();
