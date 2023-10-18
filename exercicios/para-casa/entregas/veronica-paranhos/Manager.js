import { Person } from "./Person.js";

class Manager extends Person {
  #salary;
  clients = [];

  constructor(name, cpf, salary) {
    super(name, cpf);
    this.#salary = salary;
  }

  get salary() {
    return this.#salary;
  }

  set salary(newSalary) {
    this.#salary = newSalary;
  }

  addClient(client) {
    if (this.clients.includes(client))
      return console.log("Cliente já cadastrado!");

    this.clients.push(client);
    // console.log("Cliente adicionado com sucesso!");
  }
}

export { Manager };
