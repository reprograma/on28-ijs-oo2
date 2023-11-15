class Bank {
	bankCode;
	bankName;
	#trasferTax;

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
}

const taluBank = new Bank(1235, "talu bank", 0.2);
console.log(taluBank)

const luaBank = new Bank(5321, "lua bank", 0.1);
console.log(luaBank);

const analuBank = new Bank(5146, "analu bank", 0.2);
console.log(analuBank);

const nubank = new Bank(1710, "nubank", 0.5);
console.log(nubank);

module.exports = { Bank, taluBank, luaBank, analuBank, nubank };
