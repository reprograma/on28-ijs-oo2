const Bank = require("./Bank");
const Client = require("./Client");

class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance = 0;

  constructor(client, bank, accountNumber, agencyNumber) {
    if (!(client instanceof Client)) {
      throw "The client needs to be instance of Client";
    }

    if (!(bank instanceof Bank)) {
      throw "The bank needs to be instance of Bank";
    }

    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
  }

  get balance() {
    return this.#balance;
  }

  set balance(newBalance) {
    this.#balance = newBalance;
  }

  credit(amount) {
    this.#balance += amount;
    console.log(`Your new balance is ${this.balance}`);
  }

  debit(amount) {
    this.#balance -= amount;
    console.log(`Your new balance is ${this.balance}`);
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
      console.log(`${anotherAccount} is not a valid bank account`);
    }

    const isSameBank = this.bank === anotherAccount.bank;
    const transferAmount = isSameBank
      ? amount
      : amount + this.bank.transferTax * amount;

    if (this.balance < transferAmount) {
      console.log("Error: Insufficient funds for this operation.");
      return;
    }

    this.balance -= transferAmount;
    anotherAccount.balance += amount;

    if (isSameBank) {
      console.log(
        `Transferred ${amount} to ${anotherAccount.accountNumber} without taxes.`
      );
    } else {
      console.log(
        `Transferred ${amount} to ${anotherAccount.accountNumber} with a tax of ${this.bank.transferTax}.`
      );
    }
  }

  closeAccount() {
    if (this.balance > 0) {
      console.log(
        `Your balance is ${this.balance}. You can't close your account.`
      );
      return;
    }

    if (this.balance === 0) {
      this.client = undefined;
      this.bank = undefined;
      this.accountNumber = undefined;
      this.agencyNumber = undefined;
    }

    console.log("Your account has been closed.");
  }

  cashWithdrawal(amount) {
    if (this.#balance < amount) {
      console.log("Error: Insufficient funds for this operation.");
    } else {
      this.debitAmount(amount);
    }
  }
}

module.exports = BankAccount;
