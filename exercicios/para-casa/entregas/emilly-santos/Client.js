const { Bank } = require('./Bank');

class Client {
    name;
    #cpf;
    banks = [];

    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }

    hasAccountInThisBank(bank) {
        return this.banks.some(clientBank => clientBank === bank);
    }

    addBank(bank) {
        if (!(bank instanceof Bank)) {
			console.log('Informe um banco válido');
			return;
		}

        if (!this.hasAccountInThisBank(bank)) {
            this.banks.push(bank);
            const bankIndex = Bank.createdBanks.findIndex(
                (element) => element.bankCode === bank.bankCode
            );
            Bank.createdBanks[bankIndex].numberOfClients++;
            console.log(`O usuário ${this.name} foi adicionado com sucesso ao ${bank.bankName}`)
        }else{
            console.log(`O usuário do CPF ${this.cpf} já possui conta no banco ${bank.bankName}`)
        }
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
			console.log('Informe um banco válido');
			return;
		}

        const index = this.banks.indexOf(bank);
        if (index !== -1) {
            this.banks.splice(index, 1);
            const bankIndex = Bank.createdBanks.findIndex(
                (element) => element.bankCode === bank.bankCode
            );
            Bank.createdBanks[bankIndex].numberOfClients--;
        }
    }
}

module.exports = { Client }