const { Bank } = require('./Bank');
const { Client } = require('./Client')
const { BankAccount } = require("./BankAccount");

class CurrentAccount extends BankAccount{
    #balance;
    constructor(client, bank, agency, account){
        super(client, bank, agency, account);
    }

    transferTo(anotherAccount, amount){
        if (!(anotherAccount instanceof BankAccount)) {
			console.log('Informe uma conta válida!');
			return;
		}

		let amountToBeDebited = amount;
		if (this.bank.bankCode !== anotherAccount.bank.bankCode) {
			amountToBeDebited = amount + amount;
			console.log(
				`Transferência realizada sem cobrar nenhuma taxa.`
			);
		}

		if (this.#balance >= amountToBeDebited) {
			this.#balance -= amountToBeDebited;
			anotherAccount.balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}`);
			console.log(
				`O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
			);
		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$${amountToBeDebited}. 
				Para realizar essa transferência você precisa ter R$${this.balance} em conta.`
			);
		}
    }
}

module.exports = { CurrentAccount }
