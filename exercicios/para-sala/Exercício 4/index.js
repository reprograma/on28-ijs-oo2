

class Ingresso{
    preco = 10;

    mostrarPreco(){
console.log(`Preço do ingreso: ${this.preco}`)
    }
}


class IngressoNormal extends Ingresso{}

class IngressoVIP extends Ingresso{
preco = this.preco += 25;
}


const ingressoNormal1 = new IngressoNormal();
ingressoNormal1.mostrarPreco();

const ingressoVIP1 = new IngressoVIP();
ingressoVIP1.mostrarPreco();

