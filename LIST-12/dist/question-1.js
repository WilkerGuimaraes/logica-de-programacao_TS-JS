"use strict";
class Transporte {
    constructor(nome, numeroPassageiro, velocidadeAtual) {
        this.nome = nome;
        this.numeroPassageiro = numeroPassageiro;
        this.velocidadeAtual = velocidadeAtual;
    }
}
class TransporteAereo extends Transporte {
    constructor(nome, numeroPassageiro, velocidadeAtual, altitudeAtual) {
        super(nome, numeroPassageiro, velocidadeAtual);
        this.altitudeAtual = altitudeAtual;
    }
}
class Aviao extends TransporteAereo {
    constructor(nome, numeroPassageiro, velocidadeAtual, altitudeAtual, numeroMotores) {
        super(nome, numeroPassageiro, velocidadeAtual, altitudeAtual);
        this.numeroMotores = numeroMotores;
        this.motorLigado = false;
    }
    estaParado() {
        return this.velocidadeAtual === 0 && this.altitudeAtual === 0;
    }
    subir(metros) {
        if (this.motorLigado) {
            this.altitudeAtual += metros;
            console.log(`Subindo ${metros} metros. Altitude atual: ${this.altitudeAtual} metros.`);
        }
        else {
            console.log("Não é possível subir. O motor está ligado.");
        }
    }
    descer(metros) {
        if (this.motorLigado) {
            if (this.altitudeAtual >= metros) {
                this.altitudeAtual -= metros;
                console.log(`Descendo ${metros} metros. Altitude atual: ${this.altitudeAtual} metros.`);
            }
            else {
                console.log("Não é possível descer. Altitude mínima atingida.");
            }
        }
        else {
            console.log("Não é possível descer. O motor está desligado.");
        }
    }
    curvar(angulo) {
        console.log(`Curvando com um ângulo de ${angulo} graus.`);
    }
    abastecer(qntdLitros) {
        console.log(`Abastecendo com ${qntdLitros} litros de combustível.`);
    }
    ligarMotor() {
        this.motorLigado = true;
        console.log("Motor ligado.");
    }
    desligarMotor() {
        this.motorLigado = false;
        console.log("Motor desligado.");
    }
}
class Balao extends TransporteAereo {
    constructor(nome, numeroPassageiros, velocidadeAtual, altitudeAtual, pesoLargado) {
        super(nome, numeroPassageiros, velocidadeAtual, altitudeAtual);
        this.pesoLargado = pesoLargado;
        this.aquecido = false;
    }
    estaParado() {
        return this.velocidadeAtual === 0 && this.altitudeAtual === 0;
    }
    subir(metros) {
        this.altitudeAtual += metros;
        console.log(`Subindo ${metros} metros. Altirude atual: ${this.altitudeAtual} metros.`);
    }
    descer(metros) {
        if (this.altitudeAtual >= metros) {
            this.altitudeAtual -= metros;
            console.log(`Descendo ${metros} metros. Altitude atual: ${this.altitudeAtual} metros.`);
        }
        else {
            console.log("Não é possível descer. Altitude mínima atingida.");
        }
    }
    largarPeso(peso) {
        if (this.altitudeAtual > 0) {
            console.log(`Largando ${peso} kg de peso.`);
            this.pesoLargado += peso;
        }
        else {
            console.log("Não é possível largar peso. Balão no solo.");
        }
    }
    aquecerAr(temp) {
        if (this.velocidadeAtual === 0) {
            console.log(`Aquecendo o ar a ${temp} graus Celsius.`);
            this.aquecido = true;
        }
        else {
            console.log("Não é possível aquecer o ar em movimento.");
        }
    }
    getPesoLargado() {
        return this.pesoLargado;
    }
}
class TransporteTerrestre extends Transporte {
    constructor(nome, numeroPassageiro, velocidadeAtual, tipo) {
        super(nome, numeroPassageiro, velocidadeAtual);
        this.tipo = tipo;
    }
}
class Carro extends TransporteTerrestre {
    constructor(nome, numeroPassageiro, velocidadeAtual, tipo, numeroCilindros) {
        super(nome, numeroPassageiro, velocidadeAtual, tipo);
        this.velocidadeMaxima = 200;
        this.numeroCilindros = numeroCilindros;
        this.motorLigado = false;
    }
    estaParado() {
        return this.velocidadeAtual === 0;
    }
    estacionar() {
        if (this.estaParado()) {
            console.log(`${this.nome} está estacionado.`);
        }
        else {
            console.log("Você precisa parar o carro antes de estacionar.");
        }
    }
    curvar(angulo) {
        if (this.motorLigado) {
            console.log(`${this.nome} está curvando com um ângulo de ${angulo} graus.`);
        }
        else {
            console.log("Você precisa ligar o motor antes de curvar.");
        }
    }
    abastecer(qntdLitros) {
        console.log(`Abastecendo ${this.nome} com ${qntdLitros} litros de combustível.`);
    }
    ligarMotor() {
        if (!this.motorLigado) {
            console.log(`${this.nome} ligou o motor.`);
            this.motorLigado = true;
        }
        else {
            console.log(`${this.nome} já está com o motor ligado.`);
        }
    }
    embreiar() {
        console.log("Pressionando a embreagem.");
    }
    acelerar(velocidadeDesejada) {
        if (this.motorLigado) {
            if (velocidadeDesejada <= this.velocidadeMaxima) {
                console.log(`${this.nome} está acelerando para ${velocidadeDesejada} km/h.`);
                this.velocidadeAtual = velocidadeDesejada;
            }
            else {
                console.log(`${this.nome} ultrapassou a velocidade máxima de ${this.velocidadeMaxima} km/h.`);
            }
        }
        else {
            console.log("Você precisa ligar o motor antes de acelerar.");
        }
    }
}
class Bicicleta extends TransporteTerrestre {
    constructor(nome, numeroPassageiro, velocidadeAtual, tipo, numeroraios) {
        super(nome, numeroPassageiro, velocidadeAtual, tipo);
        this.numeroRaios = numeroraios;
        this.emMovimento = false;
    }
    estaParado() {
        return !this.emMovimento;
    }
    estacionar() {
        if (this.estaParado()) {
            console.log(`${this.nome} está estacionada.`);
        }
        else {
            console.log("Você precisa parar a bicicleta antes de estacionar.");
        }
    }
    curvar(angulo) {
        if (this.emMovimento) {
            console.log(`${this.nome} está curvando com um ângulo de ${angulo} graus.`);
        }
        else {
            console.log("Você precisa pedalar antes de curvar.");
        }
    }
    pedalar() {
        if (!this.emMovimento) {
            console.log(`${this.nome} começou a pedalar.`);
            this.emMovimento = true;
            this.velocidadeAtual = 10; // Ajuste a velocidade inicial conforme necessário
        }
        else {
            console.log(`${this.nome} já está em movimento.`);
        }
    }
    pararPedalada() {
        if (this.emMovimento) {
            console.log(`${this.nome} parou de pedalar.`);
            this.emMovimento = false;
            this.velocidadeAtual = 0;
        }
        else {
            console.log(`${this.nome} já está parada.`);
        }
    }
}
// Testando
class Main {
    static main() {
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
