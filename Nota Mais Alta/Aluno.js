"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Aluno {
    constructor(notaS1, notaS2, notaE) {
        this.notaS1 = 0;
        this.notaS2 = 0;
        this.notaE = 0;
        this.notaS1 = notaS1;
        this.notaS2 = notaS2;
        this.notaE = notaE;
    }
    getMaiorNotaComExame() {
        if (this.notaS1 > this.notaS2 && this.notaS1 > this.notaE) {
            return "Sua maior nota com o exame foi: " + this.notaS1;
        }
        if (this.notaS2 > this.notaS1 && this.notaS2 > this.notaE) {
            return "Sua maior nota com o exame foi: " + this.notaS2;
        }
        else {
            return "Sua maior nota com o exame foi: " + this.notaE;
        }
    }
    getMaiorNotaSemExame() {
        if (this.notaS1 > this.notaS2) {
            return "Sua maior nota sem o exame foi: " + this.notaS1;
        }
        else {
            return "Sua maior nota sem o exame foi: " + this.notaS2;
        }
    }
}
exports.default = Aluno;
