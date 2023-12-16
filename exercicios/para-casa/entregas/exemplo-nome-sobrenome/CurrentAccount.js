
const { BankAccount } = require('./BankAccount')

class CurrentAccount extends BankAccount {
  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
			console.log('Conta inválida!');
			return;
		}
    if (this.balance >= amount) {
			this.balance -= amount;
			anotherAccount.balance += amount;
			console.log(`Conta de origem saldo  é de R$ ${this.balance}`);
			console.log(
				`Conta de destino é de R$ ${anotherAccount.balance}`
			);
		} else {
			console.log(
				`Não é possível transferir saldo insuficiente. Saldo atual é de ${
					this.balance
				}. Saldo necessário para transferir ${amount} em conta.`
			);
		}
  }
}

module.exports = { CurrentAccount }