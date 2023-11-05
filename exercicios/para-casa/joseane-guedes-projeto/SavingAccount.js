import { BankAccount } from "./BankAccount.js";

class SavingAccount extends BankAccount {
  #qtdWithdrawal = 0;
  #MAX_OF_WITHDRAWAL = 2;
  #withdrawalTax = 0.03;
  incomeRate;
  incomeDay;

  constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
    super(client, bank, accountNumber, agencyNumber);
    this.incomeRate = incomeRate;
    this.incomeDay = incomeDay;
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

  generateIncome(currentDay) {
    const isIncomeDay = currentDay === this.incomeDay;

    if (isIncomeDay) {
      const income = this.balance * this.incomeRate;
      this.balance += income;
      console.log(`Rendimento aplicado com sucesso: R$ ${income}.`);
    } else {
      console.log(`Ainda não é dia de rendimento. O próximo rendimento será aplicado no dia ${this.incomeDay}.`);
    }
  }

}


export { SavingAccount };