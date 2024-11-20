"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(idade, nome) {
        this.idade = 0;
        this.nome = "";
        this.idade = idade;
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setTax(idade) {
        this.idade = idade;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getMaioridade() {
        if (this.idade >= 18) {
            return this.nome + " atingiu a maioridade!!";
        }
        else {
            return this.nome + " não atingiu a maioridade...";
        }
    }
}
exports.default = Pessoa;
