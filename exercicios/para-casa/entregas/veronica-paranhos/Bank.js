import { Manager } from "./Manager.js";

class Bank {
  bankCode;
  bankName;
  #trasferTax;

  static createdBanks = [];
  managers = [];

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

  contractManager(manager) {
    if (!(manager instanceof Manager))
      return console.log("Informe um gerente válido.");

    if (this.managers.includes(manager))
      return console.log("Gerente já cadastrado!");

    this.managers.push(manager);
    console.log(
      `Gerente ${manager.name} adicionado com sucesso no banco ${this.bankName}`
    );
  }
}

export { Bank };
