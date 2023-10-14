class Ingresso {
  lote;
  preco = 10;

  constructor(lote) {
    this.lote = lote;
  }

  mostrarPreco() {
    if (this.lote === "promocional") {
      this.preco = this.preco * 0.5;
      console.log(
        `O valor do ingresso referente ao lote ${this.lote} é $${this.preco}`
      );
      return;
    }

    if (this.lote === "primeiro") {
      this.preco = this.preco;
      console.log(
        `O valor do ingresso referente ao lote ${this.lote} é $${this.preco}`
      );
      return;
    }

    if (this.lote === "segundo") {
      this.preco = this.preco * 1.2;
      console.log(
        `O valor do ingresso referente ao lote ${this.lote} é $${this.preco}`
      );
      return;
    }

    if (this.lote === "terceiro") {
      this.preco = this.preco * 1.5;
      console.log(
        `O valor do ingresso referente ao lote ${this.lote} é $${this.preco}`
      );
      return;
    }
  }
}

class IngressoNormal extends Ingresso {
  mostrarPreco() {
    console.log("Ingresso NORMAL");
    super.mostrarPreco()
  }
}

class IngressoVip extends Ingresso {
  preco = this.preco * 2;

  mostrarPreco() {
    console.log("Ingresso VIP");
    super.mostrarPreco()
  }
}

const promocional1 = new Ingresso("promocional");
promocional1.mostrarPreco();

const terceiro1 = new Ingresso("terceiro");
terceiro1.mostrarPreco();

const segundo1 = new IngressoNormal("segundo");
segundo1.mostrarPreco();


const terceiro2 = new IngressoVip("terceiro");
terceiro2.mostrarPreco();
