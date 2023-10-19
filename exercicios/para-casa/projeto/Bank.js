class Bank {
	bankCode;
	bankName;
	#trasferTax;
	managers = []

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

module.exports = { Bank };










// class Bank {
// 	bankCode;
// 	bankName;
// 	#transferTax;
// 	#numClients;
  
// 	static createdBanks = [];
  
// 	constructor(bankCode, bankName, transferTax) {
// 	  this.bankCode = bankCode;
// 	  this.bankName = bankName;
// 	  this.#transferTax = transferTax;
// 	  this.#numClients = 0;
  
// 	  Bank.createdBanks.push({
// 		bankCode: this.bankCode,
// 		numClients: this.#numClients,
// 	  });
// 	}
  
// 	get transferTax() {
// 	  return this.#transferTax;
// 	}
//   }
  
//   module.exports = Bank;