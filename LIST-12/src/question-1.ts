interface Motorizado {
  ligarMotor(): void;
  abastecer(qntdLitros: number): void;
}

interface Conduzivel {
  curvar(angulo: number): void;
}

abstract class Transporte {
  protected nome: string;
  protected numeroPassageiro: number;
  protected velocidadeAtual: number;

  constructor(nome: string, numeroPassageiro: number, velocidadeAtual: number) {
    this.nome = nome;
    this.numeroPassageiro = numeroPassageiro;
    this.velocidadeAtual = velocidadeAtual;
  }

  abstract estaParado(): boolean;
}

abstract class TransporteAereo extends Transporte {
  protected altitudeAtual: number;

  constructor(
    nome: string,
    numeroPassageiro: number,
    velocidadeAtual: number,
    altitudeAtual: number
  ) {
    super(nome, numeroPassageiro, velocidadeAtual);
    this.altitudeAtual = altitudeAtual;
  }

  abstract subir(metros: number): void;
  abstract descer(metros: number): void;
}

class Aviao extends TransporteAereo implements Motorizado, Conduzivel {
  private numeroMotores: number;
  private motorLigado: boolean;

  constructor(
    nome: string,
    numeroPassageiro: number,
    velocidadeAtual: number,
    altitudeAtual: number,
    numeroMotores: number
  ) {
    super(nome, numeroPassageiro, velocidadeAtual, altitudeAtual);
    this.numeroMotores = numeroMotores;
    this.motorLigado = false;
  }

  estaParado(): boolean {
    return this.velocidadeAtual === 0 && this.altitudeAtual === 0;
  }

  subir(metros: number): void {
    if (this.motorLigado) {
      this.altitudeAtual += metros;
      console.log(
        `Subindo ${metros} metros. Altitude atual: ${this.altitudeAtual} metros.`
      );
    } else {
      console.log("Não é possível subir. O motor está ligado.");
    }
  }

  descer(metros: number): void {
    if (this.motorLigado) {
      if (this.altitudeAtual >= metros) {
        this.altitudeAtual -= metros;
        console.log(
          `Descendo ${metros} metros. Altitude atual: ${this.altitudeAtual} metros.`
        );
      } else {
        console.log("Não é possível descer. Altitude mínima atingida.");
      }
    } else {
      console.log("Não é possível descer. O motor está desligado.");
    }
  }

  curvar(angulo: number): void {
    console.log(`Curvando com um ângulo de ${angulo} graus.`);
  }

  abastecer(qntdLitros: number): void {
    console.log(`Abastecendo com ${qntdLitros} litros de combustível.`);
  }

  ligarMotor(): void {
    this.motorLigado = true;
    console.log("Motor ligado.");
  }

  desligarMotor(): void {
    this.motorLigado = false;
    console.log("Motor desligado.");
  }
}

class Balao extends TransporteAereo {
  private pesoLargado: number;
  private aquecido: boolean;

  constructor(
    nome: string,
    numeroPassageiros: number,
    velocidadeAtual: number,
    altitudeAtual: number,
    pesoLargado: number
  ) {
    super(nome, numeroPassageiros, velocidadeAtual, altitudeAtual);
    this.pesoLargado = pesoLargado;
    this.aquecido = false;
  }

  estaParado(): boolean {
    return this.velocidadeAtual === 0 && this.altitudeAtual === 0;
  }

  subir(metros: number): void {
    this.altitudeAtual += metros;
    console.log(
      `Subindo ${metros} metros. Altirude atual: ${this.altitudeAtual} metros.`
    );
  }

  descer(metros: number): void {
    if (this.altitudeAtual >= metros) {
      this.altitudeAtual -= metros;
      console.log(
        `Descendo ${metros} metros. Altitude atual: ${this.altitudeAtual} metros.`
      );
    } else {
      console.log("Não é possível descer. Altitude mínima atingida.");
    }
  }

  largarPeso(peso: number): void {
    if (this.altitudeAtual > 0) {
      console.log(`Largando ${peso} kg de peso.`);
      this.pesoLargado += peso;
    } else {
      console.log("Não é possível largar peso. Balão no solo.");
    }
  }

  aquecerAr(temp: number): void {
    if (this.velocidadeAtual === 0) {
      console.log(`Aquecendo o ar a ${temp} graus Celsius.`);
      this.aquecido = true;
    } else {
      console.log("Não é possível aquecer o ar em movimento.");
    }
  }

  getPesoLargado(): number {
    return this.pesoLargado;
  }
}

abstract class TransporteTerrestre extends Transporte {
  protected tipo: string;

  constructor(
    nome: string,
    numeroPassageiro: number,
    velocidadeAtual: number,
    tipo: string
  ) {
    super(nome, numeroPassageiro, velocidadeAtual);
    this.tipo = tipo;
  }

  abstract estacionar(): void;
}

class Carro extends TransporteTerrestre implements Motorizado, Conduzivel {
  private numeroCilindros: number;
  private motorLigado: boolean;
  private velocidadeMaxima: number = 200;

  constructor(
    nome: string,
    numeroPassageiro: number,
    velocidadeAtual: number,
    tipo: string,
    numeroCilindros: number
  ) {
    super(nome, numeroPassageiro, velocidadeAtual, tipo);
    this.numeroCilindros = numeroCilindros;
    this.motorLigado = false;
  }

  estaParado(): boolean {
    return this.velocidadeAtual === 0;
  }

  estacionar(): void {
    if (this.estaParado()) {
      console.log(`${this.nome} está estacionado.`);
    } else {
      console.log("Você precisa parar o carro antes de estacionar.");
    }
  }

  curvar(angulo: number): void {
    if (this.motorLigado) {
      console.log(
        `${this.nome} está curvando com um ângulo de ${angulo} graus.`
      );
    } else {
      console.log("Você precisa ligar o motor antes de curvar.");
    }
  }

  abastecer(qntdLitros: number): void {
    console.log(
      `Abastecendo ${this.nome} com ${qntdLitros} litros de combustível.`
    );
  }

  ligarMotor(): void {
    if (!this.motorLigado) {
      console.log(`${this.nome} ligou o motor.`);
      this.motorLigado = true;
    } else {
      console.log(`${this.nome} já está com o motor ligado.`);
    }
  }

  embreiar(): void {
    console.log("Pressionando a embreagem.");
  }

  acelerar(velocidadeDesejada: number): void {
    if (this.motorLigado) {
      if (velocidadeDesejada <= this.velocidadeMaxima) {
        console.log(
          `${this.nome} está acelerando para ${velocidadeDesejada} km/h.`
        );
        this.velocidadeAtual = velocidadeDesejada;
      } else {
        console.log(
          `${this.nome} ultrapassou a velocidade máxima de ${this.velocidadeMaxima} km/h.`
        );
      }
    } else {
      console.log("Você precisa ligar o motor antes de acelerar.");
    }
  }
}

class Bicicleta extends TransporteTerrestre implements Conduzivel {
  private numeroRaios: number;
  private emMovimento: boolean;

  constructor(
    nome: string,
    numeroPassageiro: number,
    velocidadeAtual: number,
    tipo: string,
    numeroraios: number
  ) {
    super(nome, numeroPassageiro, velocidadeAtual, tipo);
    this.numeroRaios = numeroraios;
    this.emMovimento = false;
  }

  estaParado(): boolean {
    return !this.emMovimento;
  }

  estacionar(): void {
    if (this.estaParado()) {
      console.log(`${this.nome} está estacionada.`);
    } else {
      console.log("Você precisa parar a bicicleta antes de estacionar.");
    }
  }

  curvar(angulo: number): void {
    if (this.emMovimento) {
      console.log(
        `${this.nome} está curvando com um ângulo de ${angulo} graus.`
      );
    } else {
      console.log("Você precisa pedalar antes de curvar.");
    }
  }

  pedalar(): void {
    if (!this.emMovimento) {
      console.log(`${this.nome} começou a pedalar.`);
      this.emMovimento = true;
      this.velocidadeAtual = 10; // Ajuste a velocidade inicial conforme necessário
    } else {
      console.log(`${this.nome} já está em movimento.`);
    }
  }

  pararPedalada(): void {
    if (this.emMovimento) {
      console.log(`${this.nome} parou de pedalar.`);
      this.emMovimento = false;
      this.velocidadeAtual = 0;
    } else {
      console.log(`${this.nome} já está parada.`);
    }
  }
}

// Testando
class Main {
  static main(): void {
    const aviao = new Aviao("Boeing 747", 200, 900, 10000, 4);
    aviao.ligarMotor();
    aviao.abastecer(5000);
    aviao.subir(500);
    aviao.curvar(15);

    console.log("\n");

    const balao = new Balao("Balão de Ar Quente", 4, 0, 0, 0);
    console.log(balao.estaParado());

    balao.subir(2000);
    balao.largarPeso(100);
    balao.aquecerAr(80);
    balao.descer(500);

    console.log(`Peso largado: ${balao.getPesoLargado()} kg`);

    console.log("\n");

    const carro = new Carro("Fusca", 4, 60, "Sedan", 4);
    carro.ligarMotor();
    carro.abastecer(50);
    carro.curvar(30);

    console.log("\n");

    const bicicleta = new Bicicleta("Caloi", 1, 20, "BMX", 36);
    bicicleta.curvar(45);
  }
}

Main.main();
