const { analuBank } = require("./Bank");
const { BankAccount, contaTalita, contaTalu } = require("./BankAccount");

class CurrentAccount extends BankAccount {

    transferTo(anotherAccount, amount) {
        super.transferTo();
        if (amount <= this.balance) {
            console.log(`Transferência no valor de R$ ${amount},00 para a conta ${anotherAccount} realizada sem pagamento de taxa.\nSaldo disponível: R$ ${this.balance},00`);
        }
    }
}

const currentAccount = new CurrentAccount(contaTalita, analuBank, 5146, 5146);
currentAccount.transferTo(contaTalu, 20)// Pq retorna que não é uma função??
module.exports = { CurrentAccount };