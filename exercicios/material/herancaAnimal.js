class Animal {
    tipo = 'animal';
    nome;
  
    constructor(nome) {
      this.nome = nome;
    }
  
    apresente() {
      console.log(`${this.nome} é um ${this.tipo}.`);
    }
  }
  
class Gato extends Animal {
    tipo = "gato"
}


const animal1 = new Animal("Mococa")
animal1.apresente()

const animal2 = new Gato("Jimin")
animal2.apresente()