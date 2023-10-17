const { Bank } = require('./Bank');
const { Client } = require('./Client')
const { BankAccount } = require("./BankAccount");
const { CurrentAccount } = require("./");
class SavingAccount extends BankAccount {
  #qtdWithdrawal = 0;
  #MAX_OF_WITHDRAWAL = 2;
  #withdrawalTax = 0.03;
  incomeRate;
  incomeDay;
  
  constructor(qtdWithdrawal, MAX_OF_WITHDRAWAL, agency, account, bank, client, incomeDay, incomeRate){
    super(qtdWithdrawal, MAX_OF_WITHDRAWAL, agency, account, bank, client)
    this.incomeDay = incomeDay;
    this.incomeRate = incomeRate;
  }

  cashWithdrawal(amount) {
    console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${this.#MAX_OF_WITHDRAWAL} retiradas gratuitas.`)

    if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
      if(this.balance >= amount) {
        this.balance -= amount;
        this.#qtdWithdrawal++;
        console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance}.`)
      } else {
        console.log(`Você não tem saldo suficiente para essa operação;`);
      }
    } else {
      const amountWithTax = amount + (amount * this.#withdrawalTax);
      if(this.balance >= amountWithTax) {
        this.balance -= amountWithTax;
        this.#qtdWithdrawal++;
        console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
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
    }
  }

}

const banco = new Bank(2563, 'geiceBB', 0.5)
const banco2 = new Bank(2773, 'BB', 0.5)
console.log(banco)

const cliente = new Client('geice', 236541789)
const client2 = new Client('margarida', 17897757)
cliente.addBank(banco2)
client2.addBank(banco2)
client2.addBank(banco)

const contaCorrente = new BankAccount(cliente, banco2, 2365, 69874512)
const contaCorrente2 = new BankAccount(client2, banco, 2365, 69874512)
console.log(contaCorrente)

console.log()
contaCorrente.balance = 600
contaCorrente.transferTo(contaCorrente2, 265)

// contaCorrente.creditAmount(200)
// contaCorrente.debitAmount(50)

contaCorrente.cashWithdrawal()


// module.exports = { SavingAccount }
