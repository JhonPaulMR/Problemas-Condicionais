"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Eleitor_1 = __importDefault(require("./Eleitor"));
const teclado = require("readline-sync");
let idade = 0;
console.log("Informe a idade do eleitor: ");
idade = teclado.questionInt();
let eleitor1 = new Eleitor_1.default(idade);
console.log(eleitor1.getVoto());
