import Aluno from "./Aluno"

const teclado = require("readline-sync");
let notaS1: number = 0;
let notaS2: number = 0;
let notaE: number = 0;

console.log("Informe a nota do 1° semestre: ")
notaS1 = teclado.questionFloat()
console.log("Informe a nota do 2° semestre: ")
notaS2 = teclado.questionFloat()
console.log("Informe a nota da avaliação de exame: ")
notaE = teclado.questionFloat()

let aluno1: Aluno = new Aluno(notaS1,notaS2,notaE)

console.log(aluno1.getMaiorNotaSemExame());
console.log(aluno1.getMaiorNotaComExame());