const { Bank } = require("./Bank");
const { Client } = require("./Client");

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

	// Criar método cashWithdrawal
	cashWithdrawal(amount) {
		if (this.#balance < amount) {
		    console.log("Erro: Saldo insuficiente para essa operação.");
		} else {
		    this.debitAmount(amount);
		}
    }
}

module.exports = { BankAccount };



// const Bank = require("./Bank");
// const Client = require("./Client");

// class BankAccount {
//   client;
//   bank;
//   accountNumber;
//   agencyNumber;
//   #balance = 0;

//   constructor(client, bank, accountNumber, agencyNumber) {
//     if (!(client instanceof Client)) {
//       throw "The client needs to be instance of Client";
//     }

//     if (!(bank instanceof Bank)) {
//       throw "The bank needs to be instance of Bank";
//     }

//     this.client = client;
//     this.bank = bank;
//     this.accountNumber = accountNumber;
//     this.agencyNumber = agencyNumber;
//   }

//   get balance() {
//     return this.#balance;
//   }

//   set balance(newBalance) {
//     this.#balance = newBalance;
//   }

//   credit(amount) {
//     this.#balance += amount;
//     console.log(`Your new balance is ${this.balance}`);
//   }

//   debit(amount) {
//     this.#balance -= amount;
//     console.log(`Your new balance is ${this.balance}`);
//   }

//   transferTo(anotherAccount, amount) {
//     if (!(anotherAccount instanceof BankAccount)) {
//       console.log(`${anotherAccount} is not a valid bank account`);
//     }

//     const isSameBank = this.bank === anotherAccount.bank;
//     const transferAmount = isSameBank
//       ? amount
//       : amount + this.bank.transferTax * amount;

//     if (this.balance < transferAmount) {
//       console.log("Error: Insufficient funds for this operation.");
//       return;
//     }

//     this.balance -= transferAmount;
//     anotherAccount.balance += amount;

//     if (isSameBank) {
//       console.log(
//         `Transferred ${amount} to ${anotherAccount.accountNumber} without taxes.`
//       );
//     } else {
//       console.log(
//         `Transferred ${amount} to ${anotherAccount.accountNumber} with a tax of ${this.bank.transferTax}.`
//       );
//     }
//   }

//   closeAccount() {
//     if (this.balance > 0) {
//       console.log(
//         `Your balance is ${this.balance}. You can't close your account.`
//       );
//       return;
//     }

//     if (this.balance === 0) {
//       this.client = undefined;
//       this.bank = undefined;
//       this.accountNumber = undefined;
//       this.agencyNumber = undefined;
//     }

//     console.log("Your account has been closed.");
//   }

//   cashWithdrawal(amount) {
//     if (this.#balance < amount) {
//       console.log("Error: Insufficient funds for this operation.");
//     } else {
//       this.debitAmount(amount);
//     }
//   }
// }

// module.exports = BankAccount;
