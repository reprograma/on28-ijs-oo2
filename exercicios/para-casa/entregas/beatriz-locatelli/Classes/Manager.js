import { Person } from "./Person.js";
import { Client } from "./Client.js";

export class Manager extends Person {
    #salary;
    clients = [];

    constructor(name, cpf, salary) {
        super(name, cpf)
        this.#salary = salary;
    }

    get salary() {
        return this.#salary
    }

    set salary(newSalary) {
        return this.#salary = newSalary
    }

    addClient(client) {
        this.clients.push(client)
        console.log(`Cliente ${client} adicionada à lista de clientes do gerente ${this.name}!`)
    }
}


