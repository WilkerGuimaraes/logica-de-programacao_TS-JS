class Conta {
  private saldo: number;

  constructor() {
    this.saldo = 0;
  }

  getSaldo(): number {
    return this.saldo;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    this.saldo -= valor;
  }
}

class Poupanca extends Conta {
  private diaRendimento: number;

  constructor() {
    super();
    this.diaRendimento = 1;
  }

  getDiaRendimento(): number {
    return this.diaRendimento;
  }

  setDiaRendimento(novoDiaRendimento: number) {
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
