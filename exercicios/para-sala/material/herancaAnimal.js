class Animal {
    type = 'animal';
    name;
  
    constructor(name) {
      this.name = name;
    }
  
    present() {
      console.log(`${this.name} é um ${this.type}.`);
    }
  }


  class Gato  extends Animal {
    type = 'gato'
  }
  
  const animal1 = new Animal('Aslam');
  //pega o present  da classe mãe
  animal1.present(); // Aslam é um animal.
  
  const dog1 = new Dog('Milu');
  dog1.present(); // Aslam é um animal.


  const gato1 = new Gato('Mocinho');
  gato1.present(); // Aslam é um animal.