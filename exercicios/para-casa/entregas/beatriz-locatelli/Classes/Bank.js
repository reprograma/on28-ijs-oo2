import { Manager } from "./Manager.js";

export class Bank {
	bankCode;
	bankName;
	#trasferTax;
	managers = [];

	static createdBanks = [];

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

	// crio o gerente para depois adicioná-lo na lista de gerentes. Aqui foi feito uma composição (O banco tem gerentes)
	contractManager(manager){
		if(!(manager instanceof Manager)){
			throw ("Não foi possível adicionar gerente à lista de gerentes. Gerente inválido")
		}
		this.managers.push(manager)
		console.log(`Gerente ${manager.name} contratada no banco ${this.bankName}!`)
	}
}

