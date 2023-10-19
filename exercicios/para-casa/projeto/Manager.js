const { Person } = require('./Person');

class Manager extends Person {
    #salary;
    clients = [];
	
	constructor(name, cpf, salary) {
		super(name, cpf)
		this.#salary = salary;
	}

    addClient(client){
        this.clients.push(client)
    }

}

module.exports = { Manager };

