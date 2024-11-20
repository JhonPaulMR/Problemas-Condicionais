import Aluno from "./Academico"

const teclado = require("readline-sync");
let notaF: number = 0;
let freq: number = 0;

console.log("Informe a nota final..: ")
notaF = teclado.questionFloat()
console.log("Informe a taxa de frequência em porcentagem: ")
freq = teclado.questionFloat()

let acad1: Aluno = new Aluno(notaF, freq)

console.log(acad1.getAprovacao());