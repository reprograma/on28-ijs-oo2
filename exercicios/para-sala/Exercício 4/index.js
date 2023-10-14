class Ingresso {
  preco = 50;

  mostrarPreco() {
    console.log(`O valor do ingresso é ${this.preco}`);
  }
}

class IngressoNormal extends Ingresso {}

class IngressoVip extends Ingresso {
  preco = this.preco += 30;
}

const novoIngressoNormal = new IngressoNormal();
const novoIngressoVip = new IngressoVip();

novoIngressoNormal.mostrarPreco();
novoIngressoVip.mostrarPreco();
