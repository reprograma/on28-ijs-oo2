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
    motor;// antes de construir o carro 
    //esperar que o objeto motor esteja construido
  
    constructor(id, modelo, motor) {
      this.id = id;
      this.modelo = modelo;
      this.motor = motor;
    }
  }
  
  const motorX = new Motor(111, 'Modelo X');//construi o moto 
  const carro = new Carro(123, 'Modelo W', motorX);//agora constroe o carro
  
  console.log(carro);
  // Carro {
  //   id: 123,
  //   modelo: 'Modelo W',
  //   motor: Motor { id: 111, modelo: 'Modelo X' }
  // }