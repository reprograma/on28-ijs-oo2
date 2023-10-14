class Mae {
  nacionalidade;
  corDosOlhos;
  corDoCabelo;

  constructor(nacionalidade, corDosOlhos, corDoCabelo) {
    this.nacionalidade = nacionalidade;
    this.corDosOlhos = corDosOlhos;
    this.corDoCabelo = corDoCabelo;
  }

  mostrarCaracteristicas() {
    console.log(
      `Nacionalidade: ${this.nacionalidade}, Cor dos Olhos: ${this.corDosOlhos}, Cor do Cabelo: ${this.corDoCabelo}`
    );
  }
}

class Filha extends Mae {}

const mae = new Mae("Brasileira", "Verde", "Loiro");
mae.mostrarCaracteristicas();

const filha = new Filha("Brasileira", "Castanho", "Castanho");
filha.mostrarCaracteristicas();
