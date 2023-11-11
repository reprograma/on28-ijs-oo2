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
		console.log(`O novo saldo da conta é: R$ ${this.#balance}`);
	}

	debitAmount(amount) {
		this.#balance -= amount;
		console.log(`O novo saldo da conta é: R$ ${this.#balance}`);
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
				`Essa transferência terá uma taxa de ${
					this.bank.transferTax * 100
				}%, pois se trata de uma transferência entre bancos diferentes.`
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
				`Você possui um saldo de R$ ${
					this.#balance
				}. Para encerrar a conta é necessário que o saldo seja igual a zero.`
			);
		}
	}

	// método cashWithdrawal criado a pedido do exercicio
	cashWithdrawal(amount) {
		if (amount <= 0) {
			console.log("Saldo insuficiente, insira um valor"); // condição caso haja saldo suficiente
			return;
		}

		if (amount <= this.balance){
			this.balance -= amount;
			console.log(`Retirada de $${amount} realizada. Saldo restante: $${this.balance}`) //Caso não haja saldo suficiente
		} else {
			console.log("Saldo insuficiente, não foi possível fazer o saque")
		}
	}

	getBalance() {
		return this.#balance
	}

	transferTo(anotherAccount, amount) { //Sobrescrever o método
		if (!(anotherAccount instanceof BankAccount)) {
			console.log('Informe uma conta válida!');
			return;
		}

		if (amount <= 0) {
			console.log('Informe um valor de transferência válido.');
			return;
		}

		if (amount <= this.#balance) {
			this.balance -= amount;
			anotherAccount.deposito(amount);
			console.log(`Transferencia de $${amount} realizada com sucesso.`)
		} else {
			console.log(`Não foi possível fazer a transferência, saldo insuficiente.`);
		}
	}		
}

class CurrentAccount extends BankAccount {} //herdando a classe BankAccount.

const current = CurrentAccount();

class SavingAccount extends BankAccount { //Deve herdar a classe BankAccount. Deve possuir os seguintes atributos
	constructor(balance, incomeRate, incomeDay){
		super(balance);

		this.incomeRate = incomeRate; //incomeRate, taxa de rendimento
		this.incomeDay = incomeDay; //incomeDay, dia de rendimento
	}
}
const minhaConta = new BankAccount(1000);
minhaConta.cashWithdrawal(500);
console.log(minhaConta)

const minhaContaPoupanca = new SavingAccount(1000);
minhaContaPoupanca.cashWithdrawal(50);

module.exports = { BankAccount };
