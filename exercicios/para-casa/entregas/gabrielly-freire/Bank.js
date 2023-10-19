const Manager = require("./Manager.js");

class Bank {
	bankCode;
	bankName;
	#trasferTax;

	static createdBanks = [];
	managers = [];

	constructor(bankCode, bankName, transferTax) {
		this.bankCode = bankCode;
		this.bankName = bankName;
		this.#trasferTax = transferTax;
		this.constructor.createdBanks.push({
			bankCode: this.bankCode,
			qtdClients: 0,
		});
	}

	get transferTax() {
		return this.#trasferTax;
	}

	contractManager(manager){
		if(manager instanceof Manager){
			this.managers.push(manager);
			console.log(`O Gerente ${manager} foi adicionado com sucesso!`);
		}else{
			console.log(`Gerente inválido`);
		}
	}
}

module.exports = { Bank };
