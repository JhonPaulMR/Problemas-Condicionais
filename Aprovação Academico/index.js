"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Academico_1 = __importDefault(require("./Academico"));
const teclado = require("readline-sync");
let notaF = 0;
let freq = 0;
console.log("Informe a nota final..: ");
notaF = teclado.questionFloat();
console.log("Informe a taxa de frequência em porcentagem: ");
freq = teclado.questionFloat();
let acad1 = new Academico_1.default(notaF, freq);
console.log(acad1.getAprovacao());
