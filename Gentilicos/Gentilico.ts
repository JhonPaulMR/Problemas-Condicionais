    export default class Gentilico {
        private uf: string = "";

        constructor (uf: string) {
            this.uf = uf
        }
  
    getGentilico() {
      if (this.uf === "AC") {
        return "acreano";
      }
      if (this.uf === "AL") {
        return "alagoano";
      }
      if (this.uf === "AP") {
        return "amapaense";
      }
      if (this.uf === "AM") {
        return "amazonense";
      }
      if (this.uf === "BA") {
        return "baiano";
      }
      if (this.uf === "CE") {
        return "cearense";
      }
      if (this.uf === "DF") {
        return "candango";
      }
      if (this.uf === "ES") {
        return "capixaba";
      }
      if (this.uf === "GO") {
        return "goiano";
      }
      if (this.uf === "MA") {
        return "maranhense";
      }
      if (this.uf === "MT") {
        return "mato-grossense";
      }
      if (this.uf === "MS") {
        return "sul-mato-grossense";
      }
      if (this.uf === "MG") {
        return "mineiro";
      }
      if (this.uf === "PA") {
        return "paraense";
      }
      if (this.uf === "PB") {
        return "paraibano";
      }
      if (this.uf === "PR") {
        return "paranaense";
      }
      if (this.uf === "PE") {
        return "pernambucano";
      }
      if (this.uf === "PI") {
        return "piauiense";
      }
      if (this.uf === "RJ") {
        return "fluminense";
      }
      if (this.uf === "RN") {
        return "potiguar";
      }
      if (this.uf === "RS") {
        return "gaúcho";
      }
      if (this.uf === "RO") {
        return "rondoniense";
      }
      if (this.uf === "RR") {
        return "roraimense";
      }
      if (this.uf === "SC") {
        return "catarinense";
      }
      if (this.uf === "SP") {
        return "paulista";
      }
      if (this.uf === "SE") {
        return "sergipano";
      }
      if (this.uf === "TO") {
        return "tocantinense";
      }
  
      return "UF inválida...";
    }
  }
