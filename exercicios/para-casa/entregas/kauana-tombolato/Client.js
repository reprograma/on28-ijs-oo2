import { Bank } from './Bank.js';

export class Client {
  #cpf;
  constructor(name, cpf, banks) {
    this.name = name;
    this.#cpf = cpf;
    this.banks = banks || [];
  }

  get cpf() {
    return this.#cpf;
  }

  hasAccountInThisBank(bank) {
    return this.banks.some(b => b.bankCode === bank.bankCode);
  }

  addBank(bank) {
    if (bank instanceof Bank) {
      if (this.hasAccountInThisBank(bank)) {
        console.log('Cliente já possui conta nesse banco');
      } else {
        this.banks.push(bank);
        console.log('Conta adicionada com sucesso');
      }
    }
  }

  removeBank(bank) {
    if (bank instanceof Bank) {
      if (this.hasAccountInThisBank(bank)) {
        this.banks = this.banks.filter(b => b.bankCode !== bank.bankCode);
        console.log('Conta removida com sucesso');
      } else {
        console.log('Cliente não possui conta nesse banco');
      }
    }
  }
}

module.exports = Client;