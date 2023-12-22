class Ingresso {
  private valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  getValor(): number {
    return this.valor;
  }

  imprimirValor(): void {
    console.log(`Preço do ingresso: R$${this.valor}`);
  }
}

class VIP extends Ingresso {
  private adicional: number;

  constructor(valor: number, adicional: number) {
    super(valor);
    this.adicional = adicional;
  }

  getValorIngressoVIP(): number {
    return super.getValor() + this.adicional;
  }
}

class Normal extends Ingresso {
  constructor(valor: number) {
    super(valor);
  }

  imprimirTipoDeIngresso(): void {
    console.log("Ingresso Normal.");
  }
}

class CamaroteInferior extends VIP {
  private localizacao: string;

  constructor(valor: number, adicional: number, localizacao: string) {
    super(valor, adicional);
    this.localizacao = localizacao;
  }

  getLocalizacao(): string {
    return this.localizacao;
  }

  imprimirLocalizacao(): void {
    console.log(`Localização: ${this.localizacao}`);
  }
}

class CamaroteSuperior extends VIP {
  constructor(valor: number, adicional: number) {
    super(valor, adicional);
  }
}

class ComprarIngresso {
  static main(): void {
    const readlineSync = require("readline-sync");
    const escolha = parseInt(
      readlineSync.question(
        "Digite 1 para comprar um ingresso normal ou digite 2 para o ingresso VIP: "
      )
    );

    if (escolha === 1) {
      const ingressoNormal = new Normal(150);
      ingressoNormal.imprimirTipoDeIngresso();
      ingressoNormal.imprimirValor();
    } else if (escolha === 2) {
      const escolhaCamarote = parseInt(
        readlineSync.question(
          "Digite 1 para o camarote superior ou digite 2 para o camarote inferior: "
        )
      );
      const precoIngressoVIP = 200;

      if (escolhaCamarote === 1) {
        const adicional = 50;
        const camaroteSuperior = new CamaroteSuperior(
          precoIngressoVIP,
          adicional
        );
        camaroteSuperior.imprimirValor();
        console.log(`Valor adicional: R$${adicional}`);
        console.log(
          `Valor total do ingresso: R$${camaroteSuperior.getValorIngressoVIP()}`
        );
      } else if (escolhaCamarote === 2) {
        const localizacao = "Setor B";
        const adicional = 0;
        const camaroteInferior = new CamaroteInferior(
          precoIngressoVIP,
          adicional,
          localizacao
        );
        camaroteInferior.imprimirValor();
        camaroteInferior.imprimirLocalizacao();
      } else {
        console.log("Escolha inválida! Programa encerrado.");
      }
    } else {
      console.log("Escolha inválida! Programa encerrado.");
    }
  }
}

ComprarIngresso.main();
