export default class Aluno {
    private notaF: number = 0;
    private freq: number = 0;

    constructor (notaF: number, freq: number) {
        this.notaF = notaF;
        this.freq = freq
    }

    getAprovacao() {
        if (this.notaF >= 6 && this.freq >= 75){
          return "Acadêmico aprovado!"
        }
        if (this.notaF >= 4 && this.freq >= 75){
          return "O Acadêmico pode cursar a disciplina sem presença obrigatória.";
        }
        return "Acadêmico reprovado...";
    }       
}
