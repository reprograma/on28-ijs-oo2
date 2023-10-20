const { BankAccount } = require('./BankAccount')

class CurrentAccount extends BankAccount {
    #balance = 0;

    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof BankAccount)) {
            console.log('Informe uma conta válida!');
            return;
        }

        let amountToBeDebited = amount;

        if (this.#balance >= amountToBeDebited) {
            this.#balance -= amountToBeDebited;

            anotherAccount.balance += amount;

            console.log(`Transferência realizada com sucesso. Seu saldo atual é de R$ ${this.#balance}`);

        } else {
            console.log(

                `Saldo insuficiente para a transferência. Seu saldo atual é de ${this.#balance}.`
            );
        }
    }
}

module.exports = { CurrentAccount };