const { BankAccount } = require('./BankAccount');

class SavingAccount extends BankAccount {
  #qtdWithdrawal = 0;
  #MAX_OF_WITHDRAWAL = 2;
  #withdrawalTax = 0.03;
  incomeRate;
  incomeDay;

  constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay){
    super(client, bank, accountNumber,agencyNumber);
    this.incomeRate = incomeRate;
    this.incomeDay = incomeDay;
  }

  cashWithdrawal(amount) {
    console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. As primeiras 2 retiradas são gratuitas.`);
    if(this.#MAX_OF_WITHDRAWAL == 0){
      console.log(`Você não possui mais retiradas gratuitas. Cada retirada terá uma taxa de 0.03`);
    }else{
      console.log(`Você ainda possui ${this.#MAX_OF_WITHDRAWAL} retiradas gratuitas.`)
    }
    
    if(this.#qtdWithdrawal <= this.#MAX_OF_WITHDRAWAL) {
      if(this.balance >= amount) {
        this.balance -= amount;
        this.#qtdWithdrawal++;
        this.#MAX_OF_WITHDRAWAL--;
        console.log(`Retirada realizada. O saldo atual da conta é de R$ ${this.balance}`)
      } else {
        console.log(`Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ ${this.balance}.`);
      }
    } else {
      const amountWithTax = amount + (amount * this.#withdrawalTax);
      if(this.balance >= amountWithTax) {
        this.balance -= amountWithTax;
        this.#qtdWithdrawal++;
        console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance}`)
      } else {
        console.log(`Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ ${this.balance}.`);
      }
    }

    console.log(`Total de retiradas: ${this.#qtdWithdrawal}`);
  }

  generateIncome(currentDay){
    if(currentDay === this.incomeDay){
      let income = this.balance * this.incomeRate;
      this.balance += income;
      console.log(`Seu novo saldo após rendimentos é de R$ ${this.balance}`);
    }else{
      console.log("Hoje não é dia da sua taxa de rendimento do dia");
    }
  }
  
}

module.exports = {SavingAccount}