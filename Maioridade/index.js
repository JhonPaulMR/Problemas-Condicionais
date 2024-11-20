"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
const teclado = require("readline-sync");
let nome = "";
let idade = 0;
console.log("Informe o nome da pessoa: ");
nome = teclado.question();
console.log("Informe sua idade atual: ");
idade = teclado.questionFloat();
let pessoa1 = new Pessoa_1.default(idade, nome);
console.log(pessoa1.getMaioridade());
