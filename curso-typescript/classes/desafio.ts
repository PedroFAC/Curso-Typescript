// Exercício 1 - Classe
class Moto {
  // this.nome = nome
  // this.velocidade = 0

  // this.buzinar = function() {
  //     console.log('Toooooooooot!')
  // }

  // this.acelerar= function(delta) {
  //     this.velocidade = this.velocidade + delta
  // }
  constructor(public nome: string, public velocidade: number = 0) {
    this.nome = nome;
    this.velocidade = velocidade;
  }

  buzinar() {
    console.log("Toooooooooot!");
  }
  acelerar(delta: number) {
    this.velocidade = this.velocidade + delta;
  }
}

var moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);

// Exercício 2 - Herança
var objeto2D = {
  base: 0,
  altura: 0,
};

abstract class Objeto2D {
  constructor(public base: number = 0, public altura: number = 0) {
    this.base = base;
    this.altura = altura;
  }
}

class Retangulo extends Objeto2D {
  area() {
    return this.base * this.altura;
  }
}

var retangulo = new Retangulo(5, 7);
console.log(retangulo.area());

// Exercício 3 - Getters & Setters

class Estagiario {
  private _primeiroNome = "";
  get primeiroNome() {
    return this._primeiroNome;
  }
  set primeiroNome(valor: string) {
    this._primeiroNome = valor;
  }
}

let estagiario = new Estagiario();

console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Le";
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Leonardo";
console.log(estagiario.primeiroNome);
