const { taluBank } = require('./Bank');
const { BankAccount, contaTalu } = require('./BankAccount');
const { cliente } = require('./Client');

class SavingAccount extends BankAccount {
  #qtdWithdrawal = 0;
  #MAX_OF_WITHDRAWAL = 2;
  #withdrawalTax = 0.03;
  incomeRate;
  incomeDay;

  constructor(qtdWithdrawal, MAX_OF_WITHDRAWAL, incomeRate, incomeDay) {
    super();
    this.#qtdWithdrawal = qtdWithdrawal;
    this.MAX_OF_WITHDRAWAL = MAX_OF_WITHDRAWAL;
    this.incomeRate = incomeRate;
    this.incomeRate = incomeDay;
  }

  cashWithdrawal(amount) {
    console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${this.#MAX_OF_WITHDRAWAL} retiradas gratuitas.`)

    if (this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
      if (this.balance >= amount) {
        this.balance -= amount;
        this.#qtdWithdrawal++;
        console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
      } else {
        console.log(`Você não tem saldo suficiente para essa operação;`);
      }
    } else {
      const amountWithTax = amount + (amount * this.#withdrawalTax);
      if (this.balance >= amountWithTax) {
        this.balance -= amountWithTax;
        this.#qtdWithdrawal++;
        console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
      } else {
        console.log(`Você não tem saldo suficiente para essa operação;`);
      }
    }

    console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas.`);
  }

  generateIncome(currentDay){
    
    if(currentDay === this.incomeDay){
      this.balance += this.incomeRate
      console.log(`Hoje seu saldo rendeu: R$${this.balance},00`);
    } else {
      console.log(`Não há rendimento.`);
    }
  }
}

const poupanca = new SavingAccount(contaTalu, taluBank, 10, 10, 1, 2);
console.log(poupanca);
poupanca.generateIncome() //Pq retorna que não é função??