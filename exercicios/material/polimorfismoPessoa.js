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
    
  speak() {
    console.log(`A usuaria de nome ${this.name} está digitando...`);
    super.speak(); 
}

}

class Student extends Person{
    email;
    constructor(name, age, email){
        super(name, age);
        this.email = email;
    }

    speak() {
        console.log(`A estudante de nome ${this.name} está estudando. Silencio, por favor`);
      }
}

console.log("**************classe mae:pessoa**************")
const pessoa1 = new Person("Larissa", 21)
pessoa1.speak()

console.log("************usuaria****************")

const usuario1 = new User("Analu", 27, "email@email.com", "12345");
usuario1.speak()

console.log("**************estudante**************")

const estudante1 = new Student("Roxanie", 24, "roxy123@email.com")
estudante1.speak()