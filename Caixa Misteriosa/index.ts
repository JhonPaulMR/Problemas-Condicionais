import Caixa from "./Caixa";

const teclado = require("readline-sync");
let senha: string = "";
let caixa: Caixa = new Caixa("utf2024", "O Professor Eliandro vai dar prova segunda!!");

console.log("Digite a senha para abrir a caixa: ");
senha = teclado.question();

console.log(caixa.getSegredo(senha));
