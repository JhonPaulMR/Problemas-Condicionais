"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Aluno_1 = __importDefault(require("./Aluno"));
const teclado = require("readline-sync");
let notaS1 = 0;
let notaS2 = 0;
let notaE = 0;
console.log("Informe a nota do 1° semestre: ");
notaS1 = teclado.questionFloat();
console.log("Informe a nota do 2° semestre: ");
notaS2 = teclado.questionFloat();
console.log("Informe a nota da avaliação de exame: ");
notaE = teclado.questionFloat();
let aluno1 = new Aluno_1.default(notaS1, notaS2, notaE);
console.log(aluno1.getMaiorNotaSemExame());
console.log(aluno1.getMaiorNotaComExame());
