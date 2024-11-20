import IRPF from "./IRPF";

const teclado = require("readline-sync");
let salario: number = 0;

console.log("Informe o salário em R$: ");
salario = teclado.questionFloat();

let imposto: IRPF = new IRPF(salario);

console.log(imposto.getAliquota());
