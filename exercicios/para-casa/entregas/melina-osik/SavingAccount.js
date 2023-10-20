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
      console.log(`Rendimento de ${income} aplicado. Seu saldo é de ${this.balance}`);
    }
  }

  cashWithdrawal(amount) {
    console.log(`Você efetuou ${this.qtdWithdrawal} saques. A partir do segundo saque é aplicada uma taxa.`);
    if(this.qtdWithdrawal < this.maxOfWithdrawal && this.balance >= amount) {
      this.balance -= amount;
      this.qtdWithdrawal++;
      console.log(`Saque efetuado. Seu saldo é de ${this.balance}. Quantidade de saques realizados: ${this.qtdWithdrawal}`);
    } else if(this.qtdWithdrawal >= this.maxOfWithdrawal && this.balance >= amount * this.withdrawalTax) {
      this.balance -= (amount * this.withdrawalTax);
      this.qtdWithdrawal++;
      console.log(`Saque efetuado com aplicação de taxa por exceder o limite de saques gratuitos. Seu saldo é de ${this.balance}. Quantidade de saques realizados: ${this.qtdWithdrawal}`);
    } else {
      console.log(`Saldo insuficiente. Seu saldo é de ${this.balance}.`)
    }
  }
}

module.exports = { SavingAccount }