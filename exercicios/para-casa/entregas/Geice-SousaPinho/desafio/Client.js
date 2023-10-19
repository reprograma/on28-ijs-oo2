const { Bank } = require('./Bank');
const { Person } = require('./desafio/Person');

class Client extends Person {
	banks = [];

	constructor(name, cpf) {
		super(name, cpf)
	}

	static getAnyManager(bank){
		const managerLength = bank.managers.length; // tamanho do array
		const index = Math.floor(Math.random() * (managerLength - 0 + 1)) + 0;
		console.log(index) // index aleatorio de acordo com o tamanho do array de gerentes
		bank.managers[index].addClient({name: this.name, cpf: this.cpf}) // em banco, a lista de gerentes, e o gerente na posição aleatória que vai receber/adc o cliente no paramentro

		// QST.: qndo um cliente for criado, como inserir no paramentro? R.: insere o objeto cliente
	}

	hasAccountInThisBank(bank) {
		return (
			this.banks.find((element) => element.bankCode === bank.bankCode) !==
			undefined
		); // vai fazer o find para buscar o banco no array, se encontrar, retorna true, se não encontrar é pq é undefined e retorna false
	}

	addBank(bank) {
		if (!(bank instanceof Bank)) {
			console.log('Informe um banco válido');
			return;
		}

		if (this.hasAccountInThisBank(bank)) {
			console.log(
				`Cliente do CPF ${this.cpf} já possui conta no banco ${bank.bankName}`
			);
			return;
		}

		this.banks.push(bank);
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients++;

		console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}.`);
	}

	removeBank(bank) {
		if (!(bank instanceof Bank)) {
			console.log('Informe um banco válido');
			return;
		}

		if (!this.hasAccountInThisBank(bank)) {
			console.log(
				`Cliente do CPF ${this.cpf} não possui conta no banco ${bank.bankName} para ser removida`
			);
			return;
		}

		this.banks = this.banks.filter(
			(element) => element.bankCode !== bank.bankCode
		);
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients--;

		console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
	}
}

// const banco = new Bank(2563, 'geiceBB', 0.5)
// const banco2 = new Bank(2773, 'BB', 0.5)
// console.log(banco)

// const cliente = new Client('geice', 236541789)
// console.log(cliente)

// console.log(cliente.cpf)
// cliente.addBank(banco)
// cliente.addBank(banco2)
// console.log(cliente.banks)
// cliente.removeBank(banco)
// console.log(cliente.banks)

module.exports = { Client };
