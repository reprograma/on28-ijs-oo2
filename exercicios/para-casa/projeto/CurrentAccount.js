const { BankAccount } = require("./BankAccount");

class CurrentAccount extends BankAccount {
  constructor(client, bank, accountNumber, agencyNumber) {
    super(client, bank, accountNumber, agencyNumber);
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
      console.log(`${anotherAccount} não é uma conta válida!`);
    }

    if (this.balance < amount) {
      console.log("Erro: Saldo insuficiente para essa operação.");
      return;
    }

    if (this.balance >= amount) {
      this.balance -= amount;
      anotherAccount.balance += amount;
      console.log(`O valor retirado da conta é de R${this.balance}`);
    }
  }
}

module.exports = CurrentAccount;