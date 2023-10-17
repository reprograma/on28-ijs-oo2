const { Bank } = require("./Bank");
const { Client } = require("./Client")
const { BankAccount } = require("./BankAccount");
const { CurrentAccount } = require("./CurrentAccount");

class SavingAccount extends BankAccount {
  #qtdWithdrawal = 0;
  #MAX_OF_WITHDRAWAL = 2;
  #withdrawalTax = 0.03;
  incomeRate;
  incomeDay;

  constructor(client, bank, account, agency, incomeDay, incomeRate){
    super(client, bank, account, agency)
    this.incomeDay = incomeDay;
    this.incomeRate = incomeRate;
  }

  cashWithdrawal(amount) {
    console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${this.#MAX_OF_WITHDRAWAL} retiradas gratuitas.`)

    if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
      if(this.balance >= amount) {
        this.balance -= amount;
        this.#qtdWithdrawal++;
        console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance.toFixed(2)}.`)
      } else {
        console.log(`Você não tem saldo suficiente para essa operação;`);
      }
    } else {
      const amountWithTax = amount + (amount * this.#withdrawalTax);
      if(this.balance >= amountWithTax) {
        this.balance -= amountWithTax;
        this.#qtdWithdrawal++;
        console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance.toFixed(2)}`)
      } else {
        console.log(`Você não tem saldo suficiente para essa operação;`);
      }
    }

    console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas.`);
  }

  get qtdWithdrawal(){
    return this.#qtdWithdrawal;
  }

  get withdrawalTax(){
    return this.#withdrawalTax;
  }

  set withdrawalTax(newTax){
    return this.#qtdWithdrawal = newTax;
  }

  generateIncome(currentDay){
    if(currentDay === this.incomeDay){
      this.balance += (this.balance * 0.4);
      console.log(`Seu novo saldo é ${this.balance}. O valor do rendimento foi de R$ ${this.balance * 0.4}.`)
      return
    } else {
      console.log(`Nenhuma data correspondente foi encontrada.`)
    }
  }

}

module.exports = { SavingAccount }
