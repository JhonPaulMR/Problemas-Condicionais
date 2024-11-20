import Gentilico from "./Gentilico";

const teclado = require("readline-sync");
let uf: string = "";

console.log("Informe a UF do seu estado");
uf = teclado.question();
uf = uf.toUpperCase()

let uf1: Gentilico = new Gentilico(uf);

console.log("Seu gentilico é " + uf1.getGentilico());
