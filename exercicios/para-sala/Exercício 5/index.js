

class Ingresso {
    lote;
    preco = 10;

    constructor(lote) {
        this.lote = lote;
    }

    mostrarPreco() {
        const precos = {
            'promocional': 10,
            'primeiro': 20,
            'segundo': 30,
            'terceiro': 40,
        };
        return precos[this.lote];
    }

}




class IngressoNormal extends Ingresso { }

class IngressoVIP extends Ingresso {
    constructor(lote) {
    super(lote);
    const precosVip = {
        'promocional': 30,
        'primeiro': 50,
        'segundo': 60,
        'terceiro': 70,
    };
    return precosVip[this.lote];
}
}


const ingressoNormal1 = new Ingresso("terceiro");
ingressoNormal1.mostrarPreco();


// const ingresso = new Ingresso('promocional')
// const ingresso2 = new Ingresso('terceiro')
// console.log(ingresso)
// console.log(ingresso2)


// class Ingresso {
//     lote;
//     constructor(tipoLote){
//         if(tipoLote === 'promocional'){
//             this.lote = 'PROMOCIONAL'
//             this.preco = 25
//         }
//         if(tipoLote === 'primeiro'){
//             this.lote = 'PRIMEIRO'
//             this.preco = 35
//         }
//         if(tipoLote === 'segundo'){
//             this.lote = 'SEGUNDO'
//             this.preco = 45
//         }
//         if(tipoLote === 'terceiro'){
//             this.lote = 'TERCEIRO'
//             this.preco = 55
//         }
//     }

//     mostrarPreco(){
//         console.log(`O preço é R$ ${this.preco}`);
//     }
// }

// const ingresso = new Ingresso('promocional')
// const ingresso2 = new Ingresso('terceiro')
// console.log(ingresso)
// console.log(ingresso2)

