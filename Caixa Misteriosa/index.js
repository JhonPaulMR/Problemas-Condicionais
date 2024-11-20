"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Caixa_1 = __importDefault(require("./Caixa"));
const teclado = require("readline-sync");
let senha = "";
let caixa = new Caixa_1.default("utf2024", "O Professor Eliandro vai dar prova segunda!!");
console.log("Digite a senha para abrir a caixa: ");
senha = teclado.question();
console.log(caixa.getSegredo(senha));
