const { Bank, taluBank, luaBank, analuBank, nubank } = require('./Bank');

class Client {
	name;
	#cpf;
	banks = [];

	constructor(name, cpf) {
		this.name = name;
		this.#cpf = cpf;
	}

	get cpf() {
		return this.#cpf;
	}

	hasAccountInThisBank(bank) {
		return (
			this.banks.find((element) => element.bankCode === bank.bankCode) !==
			undefined
		);
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
const cliente = new Client("talu", 123456789010);
console.log(cliente);
cliente.addBank(taluBank);
cliente.addBank(luaBank);
cliente.addBank(analuBank);
cliente.addBank(nubank);
console.log(cliente);
cliente.removeBank(nubank);
console.log(cliente);

console.log("==================");

const cliente1 = new Client("talita", 10987654321);
console.log(cliente1);
cliente1.addBank(taluBank);
cliente1.addBank(luaBank);
cliente1.addBank(analuBank);
cliente1.addBank(nubank);
console.log(cliente1);
cliente1.removeBank(taluBank);
console.log(cliente1);

module.exports = { Client, cliente, cliente1 };
