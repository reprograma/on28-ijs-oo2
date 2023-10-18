class Bank {
  bankCode;
  bankName;
  #transferTax;
  #numClients;

  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
    this.#numClients = 0;

    Bank.createdBanks.push({
      bankCode: this.bankCode,
      numClients: this.#numClients,
    });
  }

  get transferTax() {
    return this.#transferTax;
  }
}

module.exports = Bank;
