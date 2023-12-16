const { BankAccount } = require('./BankAccount')

class SavingAccount extends BankAccount {
  incomeRate;
  incomeDay;
  #qtdWithdrawal = 0;
  maxOfWithdrawal = 2;
  #withdrawalTax = 0.03;

  constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
    super(client, bank, accountNumber, agencyNumber)
    this.incomeRate = incomeRate;
    this.incomeDay = incomeDay;    
  }

  get qtdWithdrawal() {
    return this.#qtdWithdrawal;
  }

  set qtdWithdrawal(qtd) {
    this.#qtdWithdrawal = qtd;
  }

  get withdrawalTax() {
    return this.#withdrawalTax;
  }

  set withdrawalTax(newTaxAmount) {
    this.#withdrawalTax = newTaxAmount;
  }

  generateIncome(currentDay) {
    if(currentDay === this.incomeDay) {
      let income = this.balance * this.incomeRate;
      this.balance += income;
      console.log(`Rendimento  ${income}. Saldo atual ${this.balance}`);
    }
  }

  cashWithdrawal(amount) {
    console.log(`Saques efetuados ${this.qtdWithdrawal}. É cobrado uma taxa a partir do segundo saque.`);
    if(this.qtdWithdrawal < this.maxOfWithdrawal && this.balance >= amount) {
      this.balance -= amount;
      this.qtdWithdrawal++;
      console.log(`Saques efetuados, saldo atual ${this.balance}. Total de saques realizados: ${this.qtdWithdrawal}`);
    } else if(this.qtdWithdrawal >= this.maxOfWithdrawal && this.balance >= amount * this.withdrawalTax) {
      this.balance -= (amount * this.withdrawalTax);
      this.qtdWithdrawal++;
      console.log(`Saque efetuado com taxa. Saldo atual é de ${this.balance}. Total de saques realizados: ${this.qtdWithdrawal}`);
    } else {
      console.log(`Saldo insuficiente. Saldo  ${this.balance}.`)
    }
  }
}

module.exports = { SavingAccount }