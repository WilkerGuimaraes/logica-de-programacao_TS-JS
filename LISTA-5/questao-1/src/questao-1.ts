class Pessoa {
  private nome: string;
  private sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  getNome(): string {
    return this.nome;
  }

  getSobrenome(): string {
    return this.sobrenome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  setSobrenome(sobrenome: string): void {
    this.sobrenome = sobrenome;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

class Funcionario extends Pessoa {
  private matricula: number;
  private salario: number;

  constructor(
    nome: string,
    sobrenome: string,
    matricula: number,
    salario: number
  ) {
    super(nome, sobrenome);
    this.matricula = matricula;
    this.salario = Math.max(0, salario);
  }

  getMatricula(): number {
    return this.matricula;
  }

  setMatricula(matricula: number): void {
    this.matricula = matricula;
  }

  getSalario(): number {
    return this.salario;
  }

  setSalario(novoSalario: number): void {
    this.salario = Math.max(0, novoSalario);
  }

  getSalarioPrimeiraParcela(): number {
    return this.salario * 0.6;
  }

  getSalarioSegundaParcela(): number {
    return this.salario * 0.4;
  }
}

class Professor extends Funcionario {
  getSalarioPrimeiraParcela(): number {
    return this.getSalario();
  }

  getSalarioSegundaParcela(): number {
    return 0;
  }
}

class UsaPessoa {
  static main(): void {
    const pessoa1 = new Pessoa("José", "Manoel");
    const pessoa2 = new Funcionario("Leandro", "Charles", 0, 2000.0);
    const pessoa3 = new Professor("Rita", "Cassia", 0, 500.0);

    console.log(`Nome completo da Pessoa1: ${pessoa1.getNomeCompleto()}`);
    console.log(`Nome completo da Pessoa2: ${pessoa2.getNomeCompleto()}`);
    console.log(`Nome completo da Pessoa3: ${pessoa3.getNomeCompleto()}`);

    console.log(
      `\nSalário da Pessoa2 (Primeira Parcela): ${pessoa2.getSalarioPrimeiraParcela()}`
    );
    console.log(
      `Salário da Pessoa2 (Segunda Parcela): ${pessoa2.getSalarioSegundaParcela()}`
    );
    console.log(
      `\nSalário da Pessoa3 (Primeira Parcela): ${pessoa3.getSalarioPrimeiraParcela()}`
    );
    console.log(
      `Salário da Pessoa3 (Segunda Parcela): ${pessoa3.getSalarioSegundaParcela()}`
    );
  }
}

UsaPessoa.main();
