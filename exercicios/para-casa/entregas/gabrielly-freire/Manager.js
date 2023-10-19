const Person = require('./Person.js');

class Manager extends Person{
    #salary;
    clients = [];

    constructor(name, cpf, salary){
        super(name, cpf);
        this.#salary = salary;
    }

    get salary(){
        return this.#salary;
    }

    set salary(salary){
        this.#salary = salary;
    }

    addClient(client){
        //fazer verificacao se é cliente do banco
        this.clients.push(client);
        console.log(`O cliente ${client} foi adicionado com sucesso!`);
    }
}

module.exports = Manager;