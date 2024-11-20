"use strict";
exports.__esModule = true;
var IRPF = /** @class */ (function () {
    function IRPF(salario) {
        this.salario = 0;
        this.salario = salario;
    }
    IRPF.prototype.getAliquota = function () {
        if (this.salario <= 2112.00) {
            return "Isento de IRPF!";
        }
        if (this.salario >= 2112.01 && this.salario <= 2826.66) {
            return "Aliquota de 7,5%, IRPF de: R$ " + (this.salario * 0.075).toFixed(2);
        }
        if (this.salario >= 2826.67 && this.salario <= 3751.06) {
            return "Aliquota de 15%, IRPF de: R$ " + (this.salario * 0.15).toFixed(2);
        }
        if (this.salario >= 3751.07 && this.salario <= 4664.68) {
            return "Aliquota de 22,5%, IRPF de: R$ " + (this.salario * 0.225).toFixed(2);
        }
        return "Aliquota de 27,5%, IRPF de: R$ " + (this.salario * 0.275).toFixed(2);
    };
    return IRPF;
}());
exports["default"] = IRPF;
