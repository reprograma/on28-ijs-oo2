const { BankAccount } = require('./BankAccount');

class SavingAccount extends BankAccount {
    #incomeRate;
    #incomeDay;

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
        super(client, bank, accountNumber, agencyNumber);
        this.#incomeRate = incomeRate;
        this.#incomeDay = incomeDay;
    }

    generateIncome(currentDay) {
        if (currentDay === this.#incomeDay) {
            const income = (this.#incomeRate / 100) * this.balance;
            this.balance += income;
            console.log(`Rendimento de R$${income} gerado. Novo saldo: R$${this.balance}`);
        } else {
            console.log("Nenhum rendimento gerado hoje.");
        }
    }
}

module.exports = { SavingAccount }