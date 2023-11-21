const { Bank } = require('./Bank.js');
const { Client } = require('./Client.js');

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
                `O CPF ${client.cpf} não possui conta no banco ${bank.bankName}`
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
        console.log(`Saldo atual: R$ ${this.#balance}`);
    }

    debitAmount(amount) {
        if (this.balance < amount) {
            console.log(`Saldo insuficiente`);
        } else {
            this.#balance -= amount;
            console.log(`Saldo atual: R$ ${this.#balance}`);
        }
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
                `Essa transferência será taxada em ${this.bank.transferTax * 100
                }%, por se tratar de uma transferência entre bancos.`
            );
        }

        if (this.#balance >= amountToBeDebited) {
            this.#balance -= amountToBeDebited;
            anotherAccount.balance += amount;

            console.log(`O seu saldo atual é de R$ ${this.#balance}`);

        } else {
            console.log(
                `Saldo insuficiente. Seu saldo atual é de ${this.#balance
                }.`
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
                }. Para encerrar a conta é necessário que o saldo seja igual a zero.`
            );
        }
    }

    cashWithdrawal(amount) {
        if (this.#balance < 0) return console.log('Saldo suficiente para realizar essa operação')
        this.#balance -= amount;
        console.log(`O novo saldo da conta é: R$ ${this.#balance}`);
    }
}

module.exports = { BankAccount } 