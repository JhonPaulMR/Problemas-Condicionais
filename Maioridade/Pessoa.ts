export default class Pessoa {
    private idade: number = 0;
    private nome: string = "";

    public constructor (idade: number, nome: string){
        this.idade = idade;
        this.nome = nome;
    }

    public getIdade(): number {
      return this.idade;
    }
  
    public setTax(idade: number): void {
      this.idade = idade;
    }
    public getNome(): string {
      return this.nome;
    }
  
    public setNome(nome: string): void {
      this.nome = nome;
    }
    public getMaioridade(): string {
      if (this.idade >= 18){
        return this.nome + " atingiu a maioridade!!"
      }
      else{
        return this.nome + " não atingiu a maioridade..."
      }
    }
  }
