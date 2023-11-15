const { Bank, taluBank, luaBank } = require('./Bank');
const { Client, cliente, cliente1 } = require('./Client');

class BankAccount {
	client;
	bank;
	accountNumber;
	agencyNumber;
	#balance = 0;

	constructor(client, bank, accountNumber, agencyNumber) {
		if (!(client instanceof Client)) {
			return new Error('Informe um cliente válido');
		}
		if (!(bank instanceof Bank)) {
			return new Error('Informe um banco válido');
		}
		if (
			client.banks.find((element) => element.bankCode === bank.bankCode) ===
			undefined
		) {
			return new Error(
				`Cliente do CPF ${client.cpf} não possui conta no banco ${bank.bankName}`
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
		console.log(`Você depositou R$ ${amount},00. O novo saldo da conta é: R$ ${this.#balance},00`);
	}

	debitAmount(amount) {
		this.#balance -= amount;
		console.log(`Você utilizou R$ ${amount},00. O novo saldo da conta é: R$ ${this.#balance},00`);
	}

	transferTo(anotherAccount, amount) {
		if (!(anotherAccount instanceof BankAccount)) {
			console.log('Informe uma conta válida!');
			return;
		}

		let amountToBeDebited = amount;
		if (this.bank.bankCode !== anotherAccount.bank.bankCode) {
			amountToBeDebited = amount + amount * this.bank.transferTax;
			console.log(
				`Essa transferência terá uma taxa de ${this.bank.transferTax * 100
				}%, pois se trata de uma transferência entre bancos diferentes.`);
			console.log(`Será descontado R$${amountToBeDebited},00 da sua conta.`);
		}

		if (this.#balance >= amountToBeDebited) {
			this.#balance -= amountToBeDebited;
			anotherAccount.balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${this.#balance},00`);
			console.log(
				`O saldo atual da conta de destino é de R$ ${anotherAccount.balance},00`
			);
		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ ${this.#balance
				}. Para realizar essa transferência você precisa ter R$ ${amountToBeDebited},00 em conta.`
			);
		}
	}

	closeAccount() {
		if (this.#balance === 0) {
			console.log(
				`Encerrando conta de ${this.client.name} no banco ${this.bank.bankName}.`
			);
			this.client = undefined;
			this.accountNumber = undefined;
			this.agencyNumber = undefined;
			this.bank = undefined;
			console.log(`Conta encerrada!`);
		} else {
			console.log(
				`Você possui um saldo de R$ ${this.#balance
				},00. Para encerrar a conta é necessário que o saldo seja igual a zero.`
			);
		}
	}

	cashWithdrawal(amount) {
		if (this.#balance === 0 || this.#balance < 0) {
			console.log(`Saldo indisponível para saque.`);
			return
		}

		if (amount <= this.#balance) {
			this.#balance -= amount;
			console.log(`Saque no valor de R$ ${amount},00 realizado.\nSaldo disponível: R$ ${this.#balance},00`);
		} else {
			console.log(`Saldo indisponível para saque.`);
			return
		}
	}
}

const contaTalita = new BankAccount(cliente1, luaBank, 5321, 5462);
const contaTalu = new BankAccount(cliente, taluBank, 1235, 5146);

contaTalita.creditAmount(5000);
contaTalita.debitAmount(200);
contaTalita.transferTo(contaTalu, 100);
contaTalita.cashWithdrawal(150);
contaTalita.closeAccount();

console.log("\n==================\n");

contaTalu.creditAmount(2000);
contaTalu.debitAmount(2000);
contaTalu.transferTo(contaTalita, 20)
contaTalu.cashWithdrawal(100);
contaTalu.closeAccount();

module.exports = { BankAccount, contaTalita, contaTalu };