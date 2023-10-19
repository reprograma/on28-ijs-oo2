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
        console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
      } else {
        console.log(`Você não tem saldo suficiente para essa operação;`);
      }
    }

    console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas.`);
  }

  generateIncome(currentDay){
    if(currentDay === this.incomeDay){
      let income = this.balance * this.incomeRate;
      this.balance += income;
      console.log(`A taxa de rendimento é ${income*100}% e seu novo saldo é R$ ${this.balance}`);
    }else{
      console.log("Hoje não é dia da sua tax de rendimento do dia");
    }
  }

  cashWithdrawal(amount) {

    console.log(`Você fez ${this.#qtdWithdrawal} retiradas e ${this.#MAX_OF_WITHDRAWAL} são gratuitas`);
		
		if(this.balance >= amount && this.#MAX_OF_WITHDRAWAL > 0){
			this.debitAmount(amount);
      console.log(`Você fez ${this.#qtdWithdrawal} retiradas`);
      this.#MAX_OF_WITHDRAWAL--;
      this.#qtdWithdrawal++;
		}else if(this.balance >= amount && this.#MAX_OF_WITHDRAWAL <= 0){
      let newAmount = amount + amount * this.#withdrawalTax;
      console.log(`Foi aplicado a taxa de 3%`);
      this.debitAmount(newAmount);
      console.log(`Você fez ${this.#qtdWithdrawal} retiradas`);
      this.#qtdWithdrawal++;
    }else{
			console.log(`Você não possui saldo suficiente para efetuar a operação. Seu saldo é R$ ${this.balance}`);
		}
	}

}

module.exports = {SavingAccount}