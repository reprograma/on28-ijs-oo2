import { Bank } from "./Bank.js";
import { Person } from "./Person.js";

class Client extends Person {
  banks = [];

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
        `Cliente do CPF ${this.cpf} já possui conta no banco ${bank.bankName}.`
      );
      return;
    }

    const yourManager = this.#getAnyManager(bank);
    const bankInfo = {
      bank: bank,
      manager: yourManager,
    };
    this.banks.push(bankInfo);

    const bankIndex = Bank.createdBanks.findIndex(
      (element) => element.bankCode === bank.bankCode
    );
    Bank.createdBanks[bankIndex].qtdClients++;

    console.log(
      `Banco ${bank.bankCode} adicionado à cliente ${this.name}. Sua gerente é ${yourManager.name}.`
    );
  }

  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log("Informe um banco válido");
      return;
    }

    if (!this.hasAccountInThisBank(bank)) {
      console.log(
        `Cliente do CPF ${this.cpf} não possui conta no banco ${bank.bankName} para ser removida.`
      );
      return;
    }

    this.banks = this.banks.filter(
      (element) => element.bank.bankCode !== bank.bankCode
    );
    const bankIndex = Bank.createdBanks.findIndex(
      (element) => element.bankCode === bank.bankCode
    );
    Bank.createdBanks[bankIndex].qtdClients--;

    console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
  }

  #getAnyManager(bank) {
    const randomIndex = Math.floor(Math.random() * bank.managers.length);
    const randomManager = bank.managers[randomIndex];
    randomManager.addClient(this.name);
    return randomManager;
  }
}

export { Client };
