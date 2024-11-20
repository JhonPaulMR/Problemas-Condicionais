export default class Aluno {
    private notaS1: number = 0;
    private notaS2: number = 0;
    private notaE: number = 0;

    constructor (notaS1: number, notaS2: number, notaE: number) {
        this.notaS1 = notaS1;
        this.notaS2 = notaS2;
        this.notaE = notaE;
    }

    getMaiorNotaComExame() {
        if (this.notaS1 > this.notaS2 && this.notaS1 > this.notaE) {
          return "Sua maior nota com o exame foi: " + this.notaS1
        }
        if (this.notaS2 > this.notaS1 && this.notaS2 > this.notaE) {
          return "Sua maior nota com o exame foi: " + this.notaS2
        }
        else {
          return "Sua maior nota com o exame foi: " + this.notaE
        }
    }
    getMaiorNotaSemExame() {
      if (this.notaS1 > this.notaS2) {
        return "Sua maior nota sem o exame foi: " + this.notaS1
      }
      else {
        return "Sua maior nota sem o exame foi: " + this.notaS2
      }
  }       
}
