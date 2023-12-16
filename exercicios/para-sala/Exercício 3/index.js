class Mae {

    nacionalidade;
    corDosOlhos;
    corDoCabelo;

    constructor(nacionalidade, corDosOlhos, corDoCabelo) {
        this.nacionalidade = nacionalidade;
        this.corDosOlhos = corDosOlhos;
        this.corDoCabelo = corDoCabelo;
    }

    mostrarCaracteristicas(){
console.log(`Nacionalidade: ${this.nacionalidade}, Cor dos olhos: ${this.corDosOlhos}, Cor do Cabelo: ${this.corDoCabelo}`)
    }

}


class Filha extends Mae {}



const pessoa = new Mae("Brasileira", "Pretos", "Loiro")
pessoa.mostrarCaracteristicas();

const pessoa1 = new Filha("Japonesa", "Pretos", "Pretos")
pessoa1.mostrarCaracteristicas();