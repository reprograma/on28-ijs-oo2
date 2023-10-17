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
				`Ttransferência realizada sem cobrar nenhuma taxa.`
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
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.#balance
				}. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
			);
		}
    }
}

// const banco = new Bank(2563, 'geiceBB', 0.5)
// const banco2 = new Bank(2773, 'BB', 0.5)
// console.log(banco)

// const cliente = new Client('geice', 236541789)
// const client2 = new Client('margarida', 17897757)
// cliente.addBank(banco2)
// client2.addBank(banco2)
// client2.addBank(banco)

// const contaCorrente = new BankAccount(cliente, banco2, 2365, 69874512)
// const contaCorrente2 = new BankAccount(client2, banco, 2365, 69874512)
// console.log(contaCorrente)

// console.log()
// contaCorrente.balance = 600
// contaCorrente.transferTo(contaCorrente2, 265)

// contaCorrente.creditAmount(200)
// contaCorrente.debitAmount(50)

// contaCorrente.cashWithdrawal()

module.exports = { CurrentAccount }
