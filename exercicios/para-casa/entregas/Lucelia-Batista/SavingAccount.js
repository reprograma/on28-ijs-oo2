const { BankAccount } = require('./BankAccount');

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

    get qtdWithdrawal() {
        return this.#qtdWithdrawal;
    }

    get withdrawalTax() {
        return this.#withdrawalTax
    }

    set withdrawalTax(newWithdrawalTax) {
        this.#withdrawalTax = newWithdrawalTax
    }

    cashWithdrawal(amount) {
        console.log(`Você já realizou ${this.#qtdWithdrawal} saques. Você ainda tem direito a ${this.#MAX_OF_WITHDRAWAL} saques gratuitos.`)

        if (this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
            if (this.balance >= amount) {
                this.balance -= amount;
                this.#qtdWithdrawal++;
                console.log(`Saque realizado com sucesso. Saldo atual: R$ ${this.balance},00`)
            } else {
                console.log(`Saldo insuficiente!`);
            }
        } else {
            const amountWithTax = amount + (amount * this.#withdrawalTax);
            if (this.balance >= amountWithTax) {
                this.balance -= amountWithTax;
                this.#qtdWithdrawal++;
                console.log(`Saque realizado com sucesso. Saldo atual: R$ ${this.balance},00`)
            } else {
                console.log(`Saldo insuficiente!`);
            }
        }

        console.log(`Você já realizou ${this.#qtdWithdrawal} saques.`);
    }

    generateIncome(currentDay) {
        if (currentDay === this.incomeDay) {
            const income = this.balance * this.incomeRate;
            this.balance += income;
            console.log(`Rendimento aplicado. Saldo atual: R$ ${this.balance},00`);
        }
    }
}

module.exports = { SavingAccount };