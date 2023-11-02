const { Manager } = require('./Manager');

class Bank {
  bankCode;
  bankName;
  #transferTax;
  managers = [];

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

  contractManager(manager) {
    if (!(manager instanceof Manager)) {
      return new Error('Não é um gerente! ');
    } else {
      this.managers.push(manager);
      console.log(`Gerente ${manager.name} contratada no banco ${this.bankName}.`);
    }
  }
}

module.exports = { Bank };
