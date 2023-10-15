const { Person } = require("./Person.js");

class Manager extends Person {
  #salary;
  clients;

  constructor(name, cpf, salary) {
    super(name, cpf);
    this.#salary = salary;
    this.clients = [];
  }

  get salary() {
    return this.#salary;
  }

  set salary(newSalary) {
    this.#salary = newSalary;
  }

  addClient(client) {
    this.clients.push(client);
    console.log(
      `O gerente ${this.name} tem um novo cliente adicionado: ${client} `
    );
  }
}

module.exports = { Manager };
