import { BankAccount } from "./BankAccount.js";

class CurrentAccount extends BankAccount {
    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof BankAccount)) {
            console.log('Informe uma conta válida!');
            return;
        }

        if (this.balance >= amount) {
            this.balance -= amount;
            anotherAccount.balance += amount;

            console.log(`Transferência realizada com sucesso. O saldo atual da conta de origem é de R$ ${this.balance}`);
            console.log(`O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`);
        } else {
            console.log(`Saldo insuficiente. Seu saldo atual é de R$ ${this.balance}. Para realizar essa transferência você precisa ter R$ ${amount} disponível em sua conta.`);
        }
    }
}

export { CurrentAccount };




