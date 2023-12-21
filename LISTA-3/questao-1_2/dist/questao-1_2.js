"use strict";
class Setor {
    constructor(nomeSetor) {
        this.codigoSetor = Setor.contadorSetores++;
        this.nomeSetor = nomeSetor;
    }
    getCodigoSetor() {
        return this.codigoSetor;
    }
    getNomeSetor() {
        return this.nomeSetor;
    }
}
Setor.contadorSetores = 1;
class Funcionario {
    constructor(nome, idade, salario, setor) {
        this.matricula = Funcionario.proximaMatricula++;
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.setor = setor;
    }
    getMatricula() {
        return this.matricula;
    }
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    getSalario() {
        return this.salario;
    }
    getSetor() {
        return this.setor;
    }
    toString() {
        console.log(`Matricula: ${this.matricula} | Nome: ${this.nome} | Idade: ${this.idade} | Salário: ${this.salario} | Setor: ${this.setor.getCodigoSetor()}-${this.setor.getNomeSetor()}`);
    }
}
Funcionario.proximaMatricula = 1;
const setorAdministracao = new Setor("Administração");
const setorContabilidade = new Setor("Contabilidade");
const setorTI = new Setor("T.I.");
const funcionario1 = new Funcionario("José", 20, 1200.0, setorTI);
const funcionario2 = new Funcionario("Maria", 25, 3500.0, setorAdministracao);
const funcionario3 = new Funcionario("João", 30, 875.79, setorContabilidade);
funcionario1.toString();
funcionario2.toString();
funcionario3.toString();
