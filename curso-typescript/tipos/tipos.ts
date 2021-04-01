// string
let nome = "João";
console.log(nome);

// numbers

let idade = 27;
idade = 27.5;

console.log(idade);

// boolean

let possuiHobbies = false;

console.log(possuiHobbies);

// tipos explicitos

let minhaIdade: any;
minhaIdade = 27;
console.log(typeof minhaIdade);
//minhaIdade = "27";

// array
let hobbies: any[] = ["Cozinhar", "Pratiar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
console.log(hobbies);

// tuplas

let endereco: [string, number, string] = ["Av principal", 99, ""];
endereco = ["Rua x", 99, "Bloco C"];
console.log(endereco);

// enums
enum Cor {
  Cinza,
  Verde = 100,
  Azul = 10,
  Laranja,
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2012 };
console.log(carro);

// funções

function retornaMeuNome(): string {
  return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
  console.log("oi");
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(4.7, 9));

const teste = function (): boolean {
  return false;
};

// tipo função

let calculo: (numeroA: number, numeroB: number) => number;
// calculo = digaOi;
// calculo();
calculo = multiplicar;
console.log(calculo(5, 6));

// objetos
let usuario: { nome: string; idade: number } = {
  nome: "João",
  idade: 27,
};

console.log(usuario);

usuario = {
  idade: 31,
  nome: "maria",
};
console.log(usuario);

// Desafio

//Alias
type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => string;
};

let funcionario: Funcionario = {
  supervisores: ["Pedro", "Amanda"],
  baterPonto(horario: number): string {
    return horario <= 8 ? "Ponto normal" : "Fora do horário";
  },
};

let funcionario2: Funcionario = {
  supervisores: ["Pedro", "Amanda"],
  baterPonto(horario: number): string {
    return horario <= 8 ? "Ponto normal" : "Fora do horário";
  },
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

// Union Types

let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);
nota = "10";
console.log(`Minha nota é ${nota}!`);
// Checando tipos

let valor = 30;
if (typeof valor === "number") {
  console.log("É um number");
} else {
  console.log(typeof valor);
}

// never

function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: "Sabão",
  preco: 8,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha("Precisa ter um nome");
    }
    if (this.preco <= 0) {
      falha("Preco inválido");
    }
  },
};

produto.validarProduto();

let altura = 12;
// altura = null

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: "Fulano",
  tel1: "9876542",
  tel2: null,
};

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

let podeSerNulo = null; // any!
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = "abc";
console.log(podeSerNulo);

//Desafio

type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number): void {
    this.saldo += valor;
  },
};

let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
