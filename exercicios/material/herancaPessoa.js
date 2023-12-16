class Person {
    name;
    age;
  
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log(`A pessoa de nome ${this.name} está falando`);
    }
  }

// class User extends Person {}
class User extends Person {
  email;
  password;

  constructor(name, age, email,password ){
    super(name, age);
    this.email = email;
    this.password = password;
  }
}

const usuario1 = new User("Analu", 27, "email@email.com", "12345");
console.log(usuario1)
usuario1.speak()