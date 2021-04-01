"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
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
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
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
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const produto1 = new Produto("Mesa", 100);
console.log(produto1.resumo());
const produto2 = new Produto("Tábua", 120, 0.4);
console.log(produto2.resumo());
// Private
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        velocidadeValida
            ? (this.velocidadeAtual = novaVelocidade)
            : (this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0);
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
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
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
// Getters e setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
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
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
//const m1 = new Matematica();
//m1.PI = 4.2;
// console.log(m1.areaCirc(4));
// const m2 = new Matematica();
// console.log(m2.areaCirc(4));
console.log(Matematica.areaCirc(4));
//classes abstratas
class X {
    w(b) {
        console.log(b);
    }
}
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
//const errado = new Unico()
console.log(Unico.getInstance().agora());
// Somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("Tu-114", "PT-ABC");
//turboHelice.modelo = 'DC-8'
//# sourceMappingURL=classes.js.map