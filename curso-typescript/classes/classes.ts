class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(3, 11);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data();
casamento.ano = 2017;
console.log(casamento);

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const aniversarioEsperto = new DataEsperta(3, 11);
aniversario.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta();
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);

// Desafio

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
  }

  public resumo(): string {
    return `${this.nome} custa R$${this.precoComDesconto()} (${
      this.desconto * 100
    }% off)`;
  }

  public precoComDesconto(): number {
    return this.preco * (1 - this.desconto);
  }
}

const produto1 = new Produto("Mesa", 100);
console.log(produto1.resumo());
const produto2 = new Produto("Tábua", 120, 0.4);
console.log(produto2.resumo());

// Private

class Carro {
  private velocidadeAtual: number = 0;
  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}
  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    velocidadeValida
      ? (this.velocidadeAtual = novaVelocidade)
      : (this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0);
    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro("Ford", "ka", 185);
Array(50)
  .fill(0)
  .forEach(() => carro1.acelerar());
console.log(carro1.acelerar());

Array(40)
  .fill(0)
  .forEach(() => carro1.frear());
console.log(carro1.frear());

// simular 'erros'

// carro1.velocidadeAtual = 300;
// console.log("atual ->" + carro1.velocidadeAtual);

// carro1.velocidadeMaxima = 500;
// console.log("maxima ->" + carro1.velocidadeMaxima);

// carro1.alterarVelocidade(150)
// console.log('atual ->' carro1.velocidadeAtual)

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super("Ferrari", modelo, velocidadeMaxima);
  }
  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}

const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());

// Getters e setters

class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor > 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);

pessoa1.idade = -3;
console.log(pessoa1.idade);

// Atributos e métodos estáticos

class Matematica {
  static PI: number = 3.1416;
  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

//const m1 = new Matematica();

//m1.PI = 4.2;
// console.log(m1.areaCirc(4));

// const m2 = new Matematica();
// console.log(m2.areaCirc(4));
console.log(Matematica.areaCirc(4));

//classes abstratas

abstract class X {
  abstract y(a: number): number;

  w(b: number): void {
    console.log(b);
  }
}

abstract class Calculo {
  protected resultado: number = 0;
  abstract executar(...numeros: number[]): void;
  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a);
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a);
  }
}

let c1: Calculo = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

class Unico {
  private static instance: Unico = new Unico();
  private constructor() {}

  static getInstance() {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}
//const errado = new Unico()
console.log(Unico.getInstance().agora());

// Somente leitura

class Aviao {
  public readonly modelo: string;
  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao("Tu-114", "PT-ABC");
//turboHelice.modelo = 'DC-8'
