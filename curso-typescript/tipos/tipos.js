"use strict";
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
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
//minhaIdade = "27";
// array
let hobbies = ["Cozinhar", "Pratiar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
// tuplas
let endereco = ["Av principal", 99, ""];
endereco = ["Rua x", 99, "Bloco C"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2012 };
console.log(carro);
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4.7, 9));
const teste = function () {
    return false;
};
// tipo função
let calculo;
// calculo = digaOi;
// calculo();
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: "João",
    idade: 27,
};
console.log(usuario);
usuario = {
    idade: 31,
    nome: "maria",
};
console.log(usuario);
let funcionario = {
    supervisores: ["Pedro", "Amanda"],
    baterPonto(horario) {
        return horario <= 8 ? "Ponto normal" : "Fora do horário";
    },
};
let funcionario2 = {
    supervisores: ["Pedro", "Amanda"],
    baterPonto(horario) {
        return horario <= 8 ? "Ponto normal" : "Fora do horário";
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = "10";
console.log(`Minha nota é ${nota}!`);
// Checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log("É um number");
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
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
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
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
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["34567890", "98765432"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map