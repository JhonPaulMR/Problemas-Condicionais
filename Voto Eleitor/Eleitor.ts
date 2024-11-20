export default class Eleitor {
    private idade: number = 0;

    constructor (idade: number) {
        this.idade = idade;
    }

      getVoto() {
        if ((this.idade < 18 && this.idade >= 16) || this.idade > 70) {
          return "O Voto é facultativo.";
        }
        else {
          if (this.idade >= 18 && this.idade <= 70) {
            return "O Voto é obrigatório."
          }
          else {
            return "O Voto não é permitido."
          }
        }   

}
}
