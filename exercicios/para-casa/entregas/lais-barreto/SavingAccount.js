const BankAccount = require("./BankAccount");

class SavingAccount extends BankAccount {
  incomeRate;
  incomeDay;
  #qtdWithdrawal = 0;
  #max_withdrawal = 2;
  #withdrawalTax = 0.03;

  constructor(
    client,
    bank,
    accountNumber,
    agencyNumber,
    incomeRate,
    incomeDay
  ) {
    super(client, bank, accountNumber, agencyNumber);
    this.incomeRate = incomeRate;
    this.incomeDay = incomeDay;
  }

  get maxWithdrawal() {
    return this.#max_withdrawal;
  }

  get withdrawalTax() {
    return this.#withdrawalTax;
  }

  cashWithdrawal(amount) {
    console.log(
      `You have made ${this.#qtdWithdrawal} withdrawals. You have ${
        this.maxWithdrawal - this.#qtdWithdrawal
      } left.`
    );

    if (this.#qtdWithdrawal < this.maxWithdrawal) {
      if (amount <= this.balance) {
        super.debit(amount);
        this.#qtdWithdrawal++;
        console.log(
          `Withdrawal successful. Your new balance is ${this.balance}.`
        );
      } else {
        console.log("Insufficient funds for this operation.");
      }
    } else {
      const withdrawalAmount = amount + this.withdrawalTax * amount;
      if (withdrawalAmount <= this.balance) {
        super.debit(withdrawalAmount);
        this.#qtdWithdrawal++;
        console.log(
          `Withdrawal successful. A withdrawal tax of ${
            this.withdrawalTax * 100
          }% was applied. Your new balance is ${this.balance}.`
        );
      } else {
        console.log("Insufficient funds for this operation.");
      }
    }
  }

  generateIncome(currentDay) {
    if (currentDay === this.incomeDay) {
      const income = this.balance * this.incomeRate;
      super.credit(income);
      console.log(
        `Your income is: ${income} and your new balance is: ${this.balance}`
      );
    } else {
      console.log("Today is not your income day");
    }
  }
}

module.exports = SavingAccount;
