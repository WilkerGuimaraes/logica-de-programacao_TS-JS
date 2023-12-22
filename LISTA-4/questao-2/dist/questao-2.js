"use strict";
class Ingresso {
    constructor(valor) {
        this.valor = valor;
    }
    getValor() {
        return this.valor;
    }
    imprimirValor() {
        console.log(`Preço do ingresso: R$${this.valor}`);
    }
}
class VIP extends Ingresso {
    constructor(valor, adicional) {
        super(valor);
        this.adicional = adicional;
    }
    getValorIngressoVIP() {
        return super.getValor() + this.adicional;
    }
}
class Normal extends Ingresso {
    constructor(valor) {
        super(valor);
    }
    imprimirTipoDeIngresso() {
        console.log("Ingresso Normal.");
    }
}
class CamaroteInferior extends VIP {
    constructor(valor, adicional, localizacao) {
        super(valor, adicional);
        this.localizacao = localizacao;
    }
    getLocalizacao() {
        return this.localizacao;
    }
    imprimirLocalizacao() {
        console.log(`Localização: ${this.localizacao}`);
    }
}
class CamaroteSuperior extends VIP {
    constructor(valor, adicional) {
        super(valor, adicional);
    }
}
class ComprarIngresso {
    static main() {
        const readlineSync = require("readline-sync");
        const escolha = parseInt(readlineSync.question("Digite 1 para comprar um ingresso normal ou digite 2 para o ingresso VIP: "));
        if (escolha === 1) {
            const ingressoNormal = new Normal(150);
            ingressoNormal.imprimirTipoDeIngresso();
            ingressoNormal.imprimirValor();
        }
        else if (escolha === 2) {
            const escolhaCamarote = parseInt(readlineSync.question("Digite 1 para o camarote superior ou digite 2 para o camarote inferior: "));
            const precoIngressoVIP = 200;
            if (escolhaCamarote === 1) {
                const adicional = 50;
                const camaroteSuperior = new CamaroteSuperior(precoIngressoVIP, adicional);
                camaroteSuperior.imprimirValor();
                console.log(`Valor adicional: R$${adicional}`);
                console.log(`Valor total do ingresso: R$${camaroteSuperior.getValorIngressoVIP()}`);
            }
            else if (escolhaCamarote === 2) {
                const localizacao = "Setor B";
                const adicional = 0;
                const camaroteInferior = new CamaroteInferior(precoIngressoVIP, adicional, localizacao);
                camaroteInferior.imprimirValor();
                camaroteInferior.imprimirLocalizacao();
            }
            else {
                console.log("Escolha inválida! Programa encerrado.");
            }
        }
        else {
            console.log("Escolha inválida! Programa encerrado.");
        }
    }
}
ComprarIngresso.main();
