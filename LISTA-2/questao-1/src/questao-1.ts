class Pessoa {
  private nome: String;
  private idade: Number;

  constructor(nome: String, idade: Number) {
    this.nome = nome;
    this.idade = idade;
  }

  getNome(): String {
    return this.nome;
  }

  getIdade(): Number {
    return this.idade;
  }

  setNome(nome: String): void {
    this.nome = nome;
  }

  setIdade(idade: Number): void {
    this.idade = idade;
  }

  toString(): String {
    return `Nome: ${this.nome}, Idade: ${this.idade} anos.`;
  }
}

class PessoaTeste {
  static main(): void {
    const pessoa = new Pessoa("Wilker", 24);

    console.log(pessoa.toString());
  }
}

PessoaTeste.main();
