const BankAccount = require("./BankAccount");

class CurrentAccount extends BankAccount {
  constructor(client, bank, accountNumber, agencyNumber) {
    super(client, bank, accountNumber, agencyNumber);
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
      console.log(`${anotherAccount} is not a valid bank account`);
    }

    if (this.balance < amount) {
      console.log("Error: Insufficient funds for this operation.");
      return;
    }

    if (this.balance >= amount) {
      this.balance -= amount;
      anotherAccount.balance += amount;
    }
  }
}

module.exports = CurrentAccount;
