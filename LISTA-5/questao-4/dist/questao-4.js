"use strict";
class Conta {
    constructor() {
        this.saldo = 0;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
}
class Poupanca extends Conta {
    constructor() {
        super();
        this.diaRendimento = 1;
    }
    getDiaRendimento() {
        return this.diaRendimento;
    }
    setDiaRendimento(novoDiaRendimento) {
        this.diaRendimento = Math.max(1, Math.min(31, novoDiaRendimento));
    }
}
const contaPoupanca = new Poupanca();
contaPoupanca.depositar(1000);
console.log(`Saldo após depósito: ${contaPoupanca.getSaldo()}`);
contaPoupanca.sacar(500);
console.log(`Saldo após saque: ${contaPoupanca.getSaldo()}`);
contaPoupanca.setDiaRendimento(5);
console.log(`Novo dia de rendimento: ${contaPoupanca.getDiaRendimento()}`);
