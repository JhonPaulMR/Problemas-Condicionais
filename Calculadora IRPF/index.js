"use strict";
exports.__esModule = true;
var IRPF_1 = require("./IRPF");
var teclado = require("readline-sync");
var salario = 0;
console.log("Informe o salário em R$: ");
salario = teclado.questionFloat();
var imposto = new IRPF_1["default"](salario);
console.log(imposto.getAliquota());
