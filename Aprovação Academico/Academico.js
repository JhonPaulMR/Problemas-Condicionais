"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Aluno {
    constructor(notaF, freq) {
        this.notaF = 0;
        this.freq = 0;
        this.notaF = notaF;
        this.freq = freq;
    }
    getAprovacao() {
        if (this.notaF >= 6 && this.freq >= 75) {
            return "Acadêmico aprovado!";
        }
        if (this.notaF >= 4 && this.freq >= 75) {
            return "O Acadêmico pode cursar a disciplina sem presença obrigatória.";
        }
        return "Acadêmico reprovado...";
    }
}
exports.default = Aluno;
