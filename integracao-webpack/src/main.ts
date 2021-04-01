import $ from "jquery";
import Livro from "./modelo/livro";

const livro = new Livro("Dom quixote", 108.8, 0.1);
console.log(livro.precoComDesconto());

$("body").append(`<h1>Nome: ${livro.nome}</h1>`);
$("body").append(`<h2>Preço: R$${livro.precoComDesconto()}</h2>`);
