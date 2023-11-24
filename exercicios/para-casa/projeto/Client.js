const { Bank } = require("./Bank.js");
const { Person } = require("./Person.js");
const { Manager } = require("./Manager.js");

class Client extends Person{
		banks = [];

hasAccountInThisBank(bank) {
	return (
		this.banks.find((element) => element.bank.bankCode === bank.bankCode) !==
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

    this.banks.push({bank:bank });
  
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
			console.log(`Cliente do CPF ${this.cpf} não possui conta no banco ${bank.bankName} para ser removida`
			);
			return;
		}

		this.banks = this.banks.filter(
			(element) => element.bank.bankCode !== bank.bankCode
		);

    const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients--;

		console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
	}
}

module.exports = { Client };