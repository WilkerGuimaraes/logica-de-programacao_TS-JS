"use strict";
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    getNome() {
        return this.nome;
    }
    getSobrenome() {
        return this.sobrenome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setSobrenome(sobrenome) {
        this.sobrenome = sobrenome;
    }
    getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        this.matricula = matricula;
        this.salario = Math.max(0, salario);
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(novoSalario) {
        this.salario = Math.max(0, novoSalario);
    }
    getSalarioPrimeiraParcela() {
        return this.salario * 0.6;
    }
    getSalarioSegundaParcela() {
        return this.salario * 0.4;
    }
}
class Professor extends Funcionario {
    getSalarioPrimeiraParcela() {
        return this.getSalario();
    }
    getSalarioSegundaParcela() {
        return 0;
    }
}
class UsaPessoa {
    static main() {
        const pessoa1 = new Pessoa("José", "Manoel");
        const pessoa2 = new Funcionario("Leandro", "Charles", 0, 2000.0);
        const pessoa3 = new Professor("Rita", "Cassia", 0, 500.0);
        console.log(`Nome completo da Pessoa1: ${pessoa1.getNomeCompleto()}`);
        console.log(`Nome completo da Pessoa2: ${pessoa2.getNomeCompleto()}`);
        console.log(`Nome completo da Pessoa3: ${pessoa3.getNomeCompleto()}`);
        console.log(`\nSalário da Pessoa2 (Primeira Parcela): ${pessoa2.getSalarioPrimeiraParcela()}`);
        console.log(`Salário da Pessoa2 (Segunda Parcela): ${pessoa2.getSalarioSegundaParcela()}`);
        console.log(`\nSalário da Pessoa3 (Primeira Parcela): ${pessoa3.getSalarioPrimeiraParcela()}`);
        console.log(`Salário da Pessoa3 (Segunda Parcela): ${pessoa3.getSalarioSegundaParcela()}`);
    }
}
UsaPessoa.main();
