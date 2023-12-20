"use strict";
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  getNome() {
    return this.nome;
  }
  getIdade() {
    return this.idade;
  }
  setNome(nome) {
    this.nome = nome;
  }
  setIdade(idade) {
    this.idade = idade;
  }
  toString() {
    return `Nome: ${this.nome}, Idade: ${this.idade} anos.`;
  }
}
class PessoaTeste {
  static main() {
    const pessoa = new Pessoa("Wilker", 24);
    console.log(pessoa.toString());
  }
}
PessoaTeste.main();
