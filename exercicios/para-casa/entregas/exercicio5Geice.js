class Ingresso {
    lote;
    constructor(tipoLote){
        if(tipoLote === 'promocional'){
            this.lote = 'PROMOCIONAL'
            this.preco = 25
        }
        if(tipoLote === 'primeiro'){
            this.lote = 'PRIMEIRO'
            this.preco = 35
        }
        if(tipoLote === 'segundo'){
            this.lote = 'SEGUNDO'
            this.preco = 45
        }
        if(tipoLote === 'terceiro'){
            this.lote = 'TERCEIRO'
            this.preco = 55
        }
    }

    mostrarPreco(){
        console.log(`O preço é R$ ${this.preco}`);
    }
}

const ingresso = new Ingresso('promocional')
const ingresso2 = new Ingresso('terceiro')
console.log(ingresso)
ingresso.mostrarPreco()
console.log()

console.log(ingresso2)
ingresso2.mostrarPreco()
console.log()


class IngressoNormal extends Ingresso{}

class IngressoVIP extends Ingresso{
    preco = this.preco += 25 // preco = this.preco += 25
}

const ingressoNormal = new IngressoNormal('segundo');
console.log(ingressoNormal)
ingressoNormal.mostrarPreco()
console.log()

const ingressoVip = new IngressoVIP('primeiro');
console.log(ingressoVip)
ingressoVip.mostrarPreco()
console.log()
