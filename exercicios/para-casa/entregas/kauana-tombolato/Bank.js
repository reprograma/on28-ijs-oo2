export class Bank {
  #transferTax

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

module.exports = Bank;