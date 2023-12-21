class Setor {
  static contadorSetores = 1;

  private codigoSetor: number;
  private nomeSetor: string;

  constructor(nomeSetor: string) {
    this.codigoSetor = Setor.contadorSetores++;
    this.nomeSetor = nomeSetor;
  }

  getCodigoSetor(): number {
    return this.codigoSetor;
  }

  getNomeSetor(): string {
    return this.nomeSetor;
  }
}

class Funcionario {
  static proximaMatricula: number = 1;

  private matricula: number;
  private nome: string;
  private idade: number;
  private salario: number;

  private setor: Setor;

  constructor(nome: string, idade: number, salario: number, setor: Setor) {
    this.matricula = Funcionario.proximaMatricula++;
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
    this.setor = setor;
  }

  getMatricula(): number {
    return this.matricula;
  }

  getNome(): string {
    return this.nome;
  }

  getIdade(): number {
    return this.idade;
  }

  getSalario(): number {
    return this.salario;
  }

  getSetor(): Setor {
    return this.setor;
  }

  toString(): void {
    console.log(
      `Matricula: ${this.matricula} | Nome: ${this.nome} | Idade: ${
        this.idade
      } | Salário: ${
        this.salario
      } | Setor: ${this.setor.getCodigoSetor()}-${this.setor.getNomeSetor()}`
    );
  }
}

const setorAdministracao = new Setor("Administração");
const setorContabilidade = new Setor("Contabilidade");
const setorTI = new Setor("T.I.");

const funcionario1 = new Funcionario("José", 20, 1200.0, setorTI);
const funcionario2 = new Funcionario("Maria", 25, 3500.0, setorAdministracao);
const funcionario3 = new Funcionario("João", 30, 875.79, setorContabilidade);

funcionario1.toString();
funcionario2.toString();
funcionario3.toString();
