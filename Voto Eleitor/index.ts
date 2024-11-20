import Eleitor from "./Eleitor"

const teclado = require("readline-sync");
let idade: number = 0;

console.log("Informe a idade do eleitor: ")
idade = teclado.questionInt()

let eleitor1: Eleitor = new Eleitor(idade)

console.log(eleitor1.getVoto());