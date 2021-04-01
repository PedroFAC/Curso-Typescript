let canal: string = "Gaveta";
let inscritos: number = 610234;

console.log(canal);

// nome = "Pedro";
// console.log(`Nome = ${nome}`);

function soma(a: any, b: any) {
  return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = "abc";

function saudar(isManha: boolean): string {
  let saudacao: string;
  if (isManha) {
    saudacao = "Bom Dia";
  } else {
    saudacao = "Boa vida";
  }
  return saudacao;
}
