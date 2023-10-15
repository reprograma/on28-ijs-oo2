const { Bank } = require("./Bank.js");
const { Person } = require("./Person.js");

class Client extends Person {
  banks;

  constructor(name, cpf) {
    super(name, cpf);
    this.banks = [];
  }

  #getAnyManager(bank) {
    if (bank.managers.length === 0) {
      console.log(`o Banco ${bank.bankName}, não possui gerentes`);
      return;
    }

    const managerIndex = Math.floor(Math.random() * bank.managers.length);
    const anyManager = bank.managers[managerIndex];

    anyManager.addClient(this.name);
    console.log(`Gerente selecionado para ${this.name}: ${anyManager.name}`);
    return anyManager;
  }

  hasAccountInThisBank(bank) {
    return (
      this.banks.find((element) => element.bank.bankCode === bank.bankCode) !==
      undefined
    );
  }

  addBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log("Informe um banco válido");
      return;
    }

    if (this.hasAccountInThisBank(bank)) {
      console.log(
        `Cliente do CPF ${this.cpf} já possui conta no banco ${bank.bankName}`
      );
      return;
    }

    const anyManager = this.#getAnyManager(bank);

    this.banks.push({ bank: bank, manager: anyManager });
    const bankIndex = Bank.createdBanks.findIndex(
      (element) => element.bankCode === bank.bankCode
    );
    Bank.createdBanks[bankIndex].qtdClients++;

    console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}.`);
  }

  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log("Informe um banco válido");
      return;
    }

    if (!this.hasAccountInThisBank(bank)) {
      console.log(
        `Cliente do CPF ${this.cpf} não possui conta no banco ${bank.bankName} para ser removida`
      );
      return;
    }

    this.banks = this.banks.filter(
      (element) => element.bankCode !== bank.bankCode
    );
    const bankIndex = Bank.createdBanks.findIndex(
      (element) => element.bankCode === bank.bankCode
    );
    Bank.createdBanks[bankIndex].qtdClients--;

    console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
  }
}
module.exports = { Client };
