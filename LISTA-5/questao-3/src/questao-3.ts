class Transporte {
  private ligado: boolean;
  private velocidade: number;

  constructor() {
    this.ligado = false;
    this.velocidade = 0;
  }

  getLigado(): boolean {
    return this.ligado;
  }

  setLigado(novoEstado: boolean) {
    this.ligado = novoEstado;
  }

  getVelocidade(): number {
    return this.velocidade;
  }

  setVelocidade(novaVelocidade: number) {
    this.velocidade = Math.max(0, Math.min(200, novaVelocidade));
  }

  liga(): void {
    this.ligado = true;
    this.velocidade = 0;
  }

  desliga(): void {
    this.ligado = false;
    this.velocidade = 0;
  }
}

class Carro extends Transporte {
  private quilometragem: number;

  constructor() {
    super();
    this.quilometragem = 0;
  }

  getQuilometragem(): number {
    return this.quilometragem;
  }

  setQuilometragem(novaQuilometragem: number): void {
    this.quilometragem = Math.max(0, Math.min(999999, novaQuilometragem));
  }
}

const carro = new Carro();

carro.liga();
console.log(`Carro ligado: ${carro.getLigado()}`);
console.log(`Velocidade: ${carro.getVelocidade()} km/h`);

carro.setVelocidade(120);
console.log(`Nova velocidade: ${carro.getVelocidade()} km/h`);

carro.setQuilometragem(50000);
console.log(`Nova quilometragem: ${carro.getQuilometragem()} km`);

carro.desliga();
console.log(`Carro ligado: ${carro.getLigado()}`);
console.log(`Velocidade: ${carro.getVelocidade()} km/h`);
