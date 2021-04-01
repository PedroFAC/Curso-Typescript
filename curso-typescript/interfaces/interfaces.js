"use strict";
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
//saudarComOla({ nome: "jonas", idade: 27, altura: 1.75 });
pessoa.saudar("Skywalker");
class Cliente {
    constructor() {
        this.nome = "";
    }
    saudar(sobrenome) {
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
let potencia;
potencia = function (base, exp) {
    return Array(exp)
        .fill(base)
        .reduce((acc, value) => acc * value);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: "Pedro",
    toString() {
        return this.nome;
    },
};
cli.log();
//# sourceMappingURL=interfaces.js.map