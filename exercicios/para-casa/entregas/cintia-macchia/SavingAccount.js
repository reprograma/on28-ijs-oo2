const { BankAccount } = require('./BankAccount');

class SavingAccount extends BankAccount {
  #qtdWithdrawal = 0; //quantidade de retiradas b.24h
  #MAX_OF_WITHDRAWAL = 2; //quantd max de retirtadas gratuitas
  #withdrawalTax = 0.03; //taxa banco 24h
  incomeRate;
  incomeDay;

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay){
      super(client, bank, accountNumber, agencyNumber)
      this.incomeRate = incomeRate,
      this.incomeDay = incomeDay
    }
    
    generateIncome(currentDay, incomeDay, incomeRate){
      if(currentDay === incomeDay){
        this.balance += incomeRate 
        console.log(`Seu saldo com rendimentos é R$ ${this.balance}`)
      }
    }


  cashWithdrawal(amount) {
    console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${this.#MAX_OF_WITHDRAWAL} retiradas gratuitas.`)

    if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
      if(this.balance >= amount) {
        this.balance -= amount;
        this.#qtdWithdrawal++;
        console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
      } else {
        console.log(`Você não tem saldo suficiente para essa operação;`);
      }
    } else {
      
      const amountWithTax = amount + (amount * this.#withdrawalTax);
      if(this.balance >= amountWithTax) {
        this.balance -= amountWithTax;
        this.#qtdWithdrawal++;
        const tax = amountWithTax - amount
        console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00. Esta operação teve uma taxa no valor de total de R$ ${tax}}`)
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
    return this.#withdrawalTax
  }

  set withdrawalTax(newWithdrawalTax){
    return this.#withdrawalTax = newWithdrawalTax
  }
}

module.exports = { SavingAccount }