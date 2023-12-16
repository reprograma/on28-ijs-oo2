class Motor {
    id;
    modelo;
  
    constructor(id, modelo) {
      this.id = id;
      this.modelo = modelo;
    }
  }
  
class Carro {
    id;
    modelo;
    motor;
  
    constructor(id, modelo, motor) {
      this.id = id;
      this.modelo = modelo;
      this.motor = motor;
    }
}

const motorItaliano = new Motor(1234586, "Modelo Italiano que acabaram de comprar")
const carro = new Carro(1287645, "Opala", motorItaliano)

console.log(carro)


