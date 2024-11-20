export default class Caixa {
    private senha: string = "";
    private segredo: string = "";

    constructor (senha: string, segredo: string) {
        this.senha = senha;
        this.segredo = segredo
    }

    getSegredo(senhaUser: string): string {
        if (senhaUser == this.senha) {
            return "O Segredo é: " + this.segredo;
        }
    return "Tente Novamente!"
    }       
}
