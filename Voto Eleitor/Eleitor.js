"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Eleitor {
    constructor(idade) {
        this.idade = 0;
        this.idade = idade;
    }
    getVoto() {
        if ((this.idade < 18 && this.idade >= 16) || this.idade > 70) {
            return "O Voto é facultativo.";
        }
        else {
            if (this.idade >= 18 && this.idade <= 70) {
                return "O Voto é obrigatório.";
            }
            else {
                return "O Voto não é permitido.";
            }
        }
    }
}
exports.default = Eleitor;
