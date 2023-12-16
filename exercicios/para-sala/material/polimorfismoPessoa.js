class Person {
    name;
    age;
  
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log(`A pessoa de nome ${this.name} está falando.`);
    }
  }
  
  class User extends Person {
    email;
    password;
  
    constructor(name, age, email, password) {
      super(name, age);
      this.email = email;
      this.password = password;
    }
  
    speak() {
      console.log(`A usuária de nome ${this.name} está correndo.`);
    }
  }
  
  class Student extends Person {
    email;
  
    constructor(name, age, email) {
      super(name, age);
      this.email = email;
    }
  
    //sobrescrever o métodod
    speak() {
        super.speak()//chama o metodo da classe mae
      console.log(`A estudante de nome ${this.name} está estudando.`);
    }
  }
  
  const person1 = new Person('Bianca', 20);
  person1.speak(); // A pessoa de nome Bianca está falando.
  
  const user1 = new User('Luara', 27, 'luarakerlen@hotmail.com', 123456);
  user1.speak(); // A usuária de nome Luara está correndo.
  
  const student1 = new Student('Maria', 36, 'maria@hotmail.com');
  student1.speak(); // A estudante de nome Maria está estudando.