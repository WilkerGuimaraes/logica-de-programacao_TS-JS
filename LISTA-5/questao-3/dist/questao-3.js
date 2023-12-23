"use strict";
class Transporte {
    constructor() {
        this.ligado = false;
        this.velocidade = 0;
    }
    getLigado() {
        return this.ligado;
    }
    setLigado(novoEstado) {
        this.ligado = novoEstado;
    }
    getVelocidade() {
        return this.velocidade;
    }
    setVelocidade(novaVelocidade) {
        this.velocidade = Math.max(0, Math.min(200, novaVelocidade));
    }
    liga() {
        this.ligado = true;
        this.velocidade = 0;
    }
    desliga() {
        this.ligado = false;
        this.velocidade = 0;
    }
}
class Carro extends Transporte {
    constructor() {
        super();
        this.quilometragem = 0;
    }
    getQuilometragem() {
        return this.quilometragem;
    }
    setQuilometragem(novaQuilometragem) {
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
