import Pessoa from "./Pessoa";

const teclado = require("readline-sync");
let nome: string = "";
let idade: number = 0;

console.log("Informe o nome da pessoa: ");
nome = teclado.question();
console.log("Informe sua idade atual: ");
idade = teclado.questionFloat();

let pessoa1: Pessoa = new Pessoa(idade, nome);
console.log(pessoa1.getMaioridade());
