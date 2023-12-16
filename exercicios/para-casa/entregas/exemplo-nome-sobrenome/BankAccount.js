const { Bank } = require('./Bank');
const { Client } = require('./Client');

class BankAccount {
	client;
	bank;
	accountNumber;
	agencyNumber;
	#balance = 0;

	constructor(client, bank, accountNumber, agencyNumber) {
		if (!(client instanceof Client)) {
			return new Error('Cliente inválido');
		}
		if (!(bank instanceof Bank)) {
			return new Error('Banco inválido');
		}
		if (
			client.banks.find((element) => element.bankCode === bank.bankCode) ===
			undefined
		) {
			return new Error(
				`Cliente  ${client.cpf} não possui conta no banco ${bank.bankName}`
			);
		}
		this.client = client;
		this.bank = bank;
		this.accountNumber = accountNumber;
		this.agencyNumber = agencyNumber;
	}

	get balance() {
		return this.#balance;
	}

	set balance(newBalance) {
		this.#balance = newBalance;
	}

	creditAmount(amount) {
		this.#balance += amount;
		console.log(`Saldo da conta: R$ ${this.#balance}`);
	}

	debitAmount(amount) {
		this.#balance -= amount;
		console.log(`Saldo da conta: R$ ${this.#balance}`);
	}

	transferTo(anotherAccount, amount) {
		if (!(anotherAccount instanceof BankAccount)) {
			console.log('Conta inválida!');
			return;
		}

		let debited = amount;
		if (this.bank.bankCode !== anotherAccount.bank.bankCode) {
			debited = amount + amount * this.bank.transferTax;
			console.log(
				` Taxa de tranferência ${
					this.bank.transferTax * 100
				}`
			);
		}

		if (this.#balance >= debited) {
			this.#balance -= debited;
			anotherAccount.balance += amount;

			console.log(`Saldo da conta que fez transferência R$ ${this.#balance}`);
			console.log(
				`Saldo da conta que recebeu a transferência R$ ${anotherAccount.balance}`
			);
		} else {
			console.log(
				`Não é possível transferir saldo insuficiente. Saldo atual é de ${
					this.#balance
				}. Saldo necessário para transferir ${debited}`
			);
		}
	}

	closeAccount() {
		if (this.#balance === 0) {
			console.log(
				`Conta encerrada cliente:  ${this.client.name} banco: ${this.bank.bankName}.`
			);
			this.client = undefined;
			this.accountNumber = undefined;
			this.agencyNumber = undefined;
			this.bank = undefined;
			console.log(`Conta encerrada!`);
		} else {
			console.log(
				`Saldo de R$ ${
					this.#balance
				}. Saldo necessário seja  zero para encerrar a conta.`
			);
		}
	}

	cashWithdrawal(amount) {
		if(this.#balance <= 0) {
			console.log(`Valor indisponível.Saldo atual ${this.#balance}`);
		} else {
			this.#balance -= amount;
			console.log(`Saque de ${amount} efetuado. Saldo atual ${this.#balance}`);
		}
	}
}

module.exports = { BankAccount };