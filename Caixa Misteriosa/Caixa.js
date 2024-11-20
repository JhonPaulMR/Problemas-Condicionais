"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Caixa {
    constructor(senha, segredo) {
        this.senha = "";
        this.segredo = "";
        this.senha = senha;
        this.segredo = segredo;
    }
    getSegredo(senhaUser) {
        if (senhaUser == this.senha) {
            return "O Segredo é: " + this.segredo;
        }
        return "Tente Novamente!";
    }
}
exports.default = Caixa;
