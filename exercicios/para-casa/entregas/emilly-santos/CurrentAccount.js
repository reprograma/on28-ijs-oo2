const { BankAccount } = require('./BankAccount');

class CurrentAccount extends BankAccount {
    transferTo(anotherAccount, amount) {
        if(amount <= 0) {
            console.log("O valor da transferência deve ser maior que zero.");
            return;
        }
        if(this.balance >= amount) {
            if (anotherAccount instanceof BankAccount) {
                // Verifica se a conta de destino pertence ao mesmo banco ou não
                if (this.bank === anotherAccount.bank) {
                    // Transferência entre contas do mesmo banco sem taxa
                    this.debitAmount(amount);
                    anotherAccount.creditAmount(amount);
                    console.log(`Transferência de R$${amount} realizada com sucesso.`);
                } else {
                    // Transferência entre contas de bancos diferentes sem taxa
                    this.debitAmount(amount);
                    anotherAccount.creditAmount(amount);
                    console.log(`Transferência de R$${amount} realizada entre bancos diferentes com sucesso.`);
                }
            } else {
                console.log("Conta de destino inválida.");
            }
        } else {
            console.log("Saldo insuficiente para a transferência.");
        }
    }
}

module.exports = { CurrentAccount }
