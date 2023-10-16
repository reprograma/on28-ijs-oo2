const { BankAccount } = require('./BankAccount');

class SavingAccount extends BankAccount {
  incomeRate;
  incomeDay;
  #qtdWithdrawal;
  MAX_OF_WITHDRAWAL;
  #withdrawalTax

  constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay){
    super(client, bank, accountNumber, agencyNumber);
    this.incomeRate = incomeRate;
    this.incomeDay = incomeDay;
    this.#qtdWithdrawal = 0;
    this.MAX_OF_WITHDRAWAL = 2;
    this.#withdrawalTax = 0.03;

  }

  get qtdWithdrawal(){
    return this.#qtdWithdrawal;
  }
  
  get withdrawalTax(){
    return this.#withdrawalTax;
  }

  set withdrawalTax(tax){
    this.#withdrawalTax = tax;
  }

  generateIncome(currentDay){
    if(this.incomeDay === currentDay){
      this.balance += this.balance * this.incomeRate;
      console.log(`Seu novo saldo após rendimentos é de R$ ${this.balance}`);
    }

  }

  cashWithdrawal(amount){
    console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. As primeiras 2 retiradas são gratuitas.`);
    if(this.balance >= amount){
      if(this.#qtdWithdrawal < 2){
        console.log(`Você ainda possui ${this.MAX_OF_WITHDRAWAL} retiradas gratuitas.`);
        this.balance -= amount;
        console.log(`Retirada realizada. O saldo atual da conta é de R$ ${this.balance}.`);
        this.MAX_OF_WITHDRAWAL--;
      }
      else{
        console.log(`Você não possui mais retiradas gratuitas. Cada retirada terá uma taxa de 0.03`);
        this.balance -= amount + amount * this.#withdrawalTax;
        console.log(`Retirada realizada. O saldo atual da conta é de R$ ${this.balance}.`);
      }
      this.#qtdWithdrawal+=1;      
    }
    else{
      console.log(`Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ ${this.balance}. Você precisa de R$ ${amount + amount * this.#withdrawalTax}`)
    }
    console.log(`Total de retiradas: ${this.#qtdWithdrawal}`);
    
  }      
    
       
}

module.exports = {SavingAccount}