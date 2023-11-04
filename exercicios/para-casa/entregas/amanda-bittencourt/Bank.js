export class Bank {
	bankCode;
	bankName;
	#transferTax;

    //estático, que armazena um objeto com os bancos existentes e sua quantidade de clientes.
	static createdBanks = [];

	constructor(bankCode, bankName, transferTax) {
		this.bankCode = bankCode;
		this.bankName = bankName;
		this.#transferTax = transferTax;
		this.constructor.createdBanks.push({
			bankCode: this.bankCode,
			qtdClients: 0,
		});
	}

	get transferTax() {
		return this.#transferTax;
	}
}
