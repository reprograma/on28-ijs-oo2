class Ingresso {
  constructor(lote) {
    this.lote = lote;
    this.preco = this.definirPreco(lote);
  }

  definirPreco(lote) {
    switch (lote) {
      case 'promocional':
        return 50;
      case 'primeiro':
        return 60;
      case 'segundo':
        return 70;
      case 'terceiro':
        return 80;
      default:
        return 0;
    }
  }

  mostrarPreco() {
    console.log(`O preço do ingresso é R$ ${this.preco}`);
  }
}

class IngressoNormal extends Ingresso {
  constructor(lote) {
    super(lote);
  }
}

class IngressoVip extends Ingresso {
  constructor(lote) {
    super(lote);
    this.adicionalVip = 30;
  }

  mostrarPreco() {
    console.log(`O preço do ingresso é R$ ${this.preco + this.adicionalVip}`);
  }
}

const ingressoNormal = new IngressoNormal('promocional');
ingressoNormal.mostrarPreco();
const ingressoVip = new IngressoVip('primeiro');
ingressoVip.mostrarPreco();