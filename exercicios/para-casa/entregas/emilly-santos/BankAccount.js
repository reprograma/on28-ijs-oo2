const { Bank } = require('./Bank');
const { Client } = require('./Client');

class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance = 0;

    constructor(client, bank, accountNumber, agencyNumber){
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

    get balance(){
        return this.#balance;
    }

    set balance(newBalance) {
        this.#balance = newBalance;
    }

    creditAmount(amount) {
        this.#balance += amount;
    }

    debitAmount(amount) {
        if (amount > 0 && this.#balance >= amount) {
            this.#balance -= amount;
        }
    }

    transferTo(anotherAccount, amount) {
        if (amount > 0 && this.#balance >= amount) {
            this.#balance -= amount;
            anotherAccount.creditAmount(amount);
        }
    }

    closeAccount(){
        if (this.#balance === 0) {
            console.log(`Encerrando conta de ${this.client.name} no banco ${this.bank.bankName}.`);
            this.client = undefined;
            this.accountNumber = undefined;
            this.agencyNumber = undefined;
            this.bank = undefined;
            console.log(`Conta encerrada!`);
        }else{
            console.log(`Você possui um saldo de R$ ${this.#balance}. Para encerrar a conta é necessário que o saldo seja igual a zero.`);
        }
    }

    cashWithdrawal(amount){
        if (amount > 0 && this.#balance >= amount) {
            this.#balance -= amount;
            console.log(`Retirada de ${amount} realizada com sucesso. Saldo restante: ${this.#balance}`);
        } else {
            console.log("Saldo insuficiente para a retirada.");
        }
    }
}

module.exports = { BankAccount}