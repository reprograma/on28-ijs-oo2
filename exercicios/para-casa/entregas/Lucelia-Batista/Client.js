const { Bank } = require('./Bank');

class Client {
    name;
    #cpf;
    banks = []

    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
    }
    get cpf() {
        console.log(`${this.name} solicitou o CPF: ${this.#cpf}`);
        return this.#cpf;

    }

    hasAccountInThisBank(bank) {
        const hasAccount = this.banks.includes(bank);
        if (hasAccount) {
            console.log(`${this.name} tem conta no banco ${bank.bankName}`);
        } else {
            console.log(`${this.name} não tem conta no banco ${bank.bankName}`);
        }
        return hasAccount;
    }

    addBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log('Informe um banco válido');
            return;
        }

        if (this.hasAccountInThisBank(bank)) {
            console.log(
                `Cliente do CPF ${this.cpf} já possui conta no banco ${bank.bankName}`
            );
            return;
        }

        this.banks.push(bank);
        const bankIndex = Bank.createdBanks.findIndex(
            (element) => element.bankCode === bank.bankCode
        );
        Bank.createdBanks[bankIndex].qtdClients++;

        console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}.`);
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log('Informe um banco válido');
            return;
        }

        if (!this.hasAccountInThisBank(bank)) {
            console.log(
                `Cliente do CPF ${this.cpf} não possui conta no banco ${bank.bankName} para ser removida`
            );
            return;
        }

        this.banks = this.banks.filter(
            (element) => element.bankCode !== bank.bankCode
        );
        const bankIndex = Bank.createdBanks.findIndex(
            (element) => element.bankCode === bank.bankCode
        );
        Bank.createdBanks[bankIndex].qtdClients--;

        console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
    }
}

module.exports = { Client };