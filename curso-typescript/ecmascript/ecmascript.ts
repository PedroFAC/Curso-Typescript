let seraQuePode = "?"; //hoisting
console.log(seraQuePode);

let estaFrio = true;

if (estaFrio) {
  let acao = "Colocar o casaco";
  console.log(acao);
}

const cpf: string = "123.456.789-10";
//cpf = "789.456.123-88";
console.log(cpf);

var segredo = "externo";

function revelar() {
  var segredo = "interno";
  console.log(segredo);
}
revelar();
console.log(segredo);

{
  {
    const def = "def";
    console.log(def);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//console.log(i);

// Arrow Function

const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => {
  return n1 - n2;
};
console.log(subtrair(2, 3));

const saudacao = () => console.log("Olá");
saudacao();

const falarCom = (pessoa: string) => console.log("Olá " + pessoa);
falarCom("Joao");

//this

// function normalComThis() {
//   console.log(this);
// }

// const normalComThisEspecial = normalComThis.bind({ nome: "ana" });
// normalComThisEspecial();

//this???
// console.log(this);
// const arrowComThis = () => console.log(this);
// arrowComThis();

// const arrowComThisEspecial = () => arrowComThis.bind({ nome: "ana" });
// arrowComThisEspecial();

// Parâmetro Padrão

function contagemRegressiva(
  inicio: number = 3,
  fim: number = inicio - 5
): void {
  console.log(inicio);
  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
  console.log("Fim!");
}

contagemRegressiva();
contagemRegressiva(3);

//rest spread

const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));

const turmaA: string[] = ["João", "Maria", "Fernanda"];
const turmaB: string[] = ["Fernando", "Miguel", "Lorena", ...turmaA];

console.log(turmaB);

function retornarArray(...args: number[]): number[] {
  return args;
}

const numeros = retornarArray(1, 2, 3, 4, 5, 6);
console.log(numeros);
console.log(retornarArray(...numbers));

//Rest & Sread (Tupla)

const tupla: [number, string, boolean] = [1, "abc", false];

function tuplaParam1(a: number, b: string, c: boolean) {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
  // console.log(Array.isArray(params));
  console.log(`2) ${params[0]}`);
}

tuplaParam2(...tupla);

// Destructuring(array)

const caracteristicas = ["Motor Zetec 1.8", 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);

// Destructuring(objeto)

const item = {
  nome: "dsdsd",
  preco: 200,
  caracteristicas: {
    w: "Importado",
  },
};

const {
  nome: n,
  preco,
  caracteristicas: { w },
} = item;
console.log(n);
console.log(preco);
console.log(w);

const usuarioID: string = "SuporteCod3r";
const notificacoes: string = "10";
const boasVindas = `
    Boas vindas ${usuarioID},
    Notificações: ${parseInt(notificacoes) > 9 ? "+9" : notificacoes}
`;
console.log(boasVindas);

// Desafios
//1.
const dobro = function (valor: number): number {
  return valor * 2;
};
console.log(dobro(10));

//2.

const dizerOla = function (nome: string = "Pessoa"): void {
  console.log(`Ola, ${nome}`);
};
dizerOla();
dizerOla("Anna");

//3.

const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));

//4.

const array = [55, 20, ...nums];
console.log(array);

//5.

const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);

// Callback

// function esperar3s(callback: (dado: string) => void) {
//   setTimeout(() => {
//     callback("3s dps");
//   }, 3000);
// }
// const resultado = esperar3s(function (resultado: string) {
//   console.log(resultado);
// });

// function esperar3sPromise() {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve("3s dps");
//     }, 3000);
//   });
// }

// esperar3sPromise().then((dado) => console.log(dado));

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => res.json())
//   .then((personagem) => personagem.films)
//   .then((films) => fetch(films[0]))
//   .then((resFilm) => resFilm.json())
//   .then((filme) => console.log(filme.title));
