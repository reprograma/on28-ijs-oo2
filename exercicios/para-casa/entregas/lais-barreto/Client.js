const Bank = require("./Bank.js");

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

  addBank(bank) {
    if (!(bank instanceof Bank)) {
      return console.log(`${bank.bankCode} is not a valid bank!`);
    }

    if (this.banks.includes(bank)) {
      return console.log(`${bank.bankCode} is already registered!`);
    }

    this.banks.push(bank);

    for (let i = 0; i < Bank.createdBanks.length; i++) {
      if (Bank.createdBanks[i].bankCode === bank.bankCode) {
        Bank.createdBanks[i].numClients++;
        break;
      }
    }
    console.log(`Bank ${bank.bankCode} was added to client ${this.name}`);
  }

  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log(`${bank.bankCode} is not a valid bank!`);
      return;
    }

    const bankIndex = this.banks.indexOf(bank);

    if (bankIndex === -1) {
      console.log(`${bank.bankCode} is not associated with ${this.name}`);
      return;
    }

    this.banks.splice(bankIndex, 1);

    for (let i = 0; i < Bank.createdBanks.length; i++) {
      if (Bank.createdBanks[i].bankCode === bank.bankCode) {
        Bank.createdBanks[i].numClients--;
        break;
      }
    }
    bank.numClients--;
    console.log(`Bank ${bank.bankCode} was removed from client ${this.name}`);
  }
}

module.exports = Client;
