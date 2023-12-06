const { BankAccount } = require("./BankAccount");

class CurrentAccount extends BankAccount {
   
    transferTo(anotherAccount, amount){
        super.transferTo()

        let amountToBeDebited = amount;
		    if (this.bank.bankCode !== anotherAccount.bank.bankCode) {
			  amountToBeDebited = amount 
			  console.log(`Essa transferência será feita para uma conta de outro banco`);
		    }

        if (this.balance >= amount) {
			  this.balance -= amount;
			  anotherAccount.balance += amount;
        console.log(`O saldo atual da conta de origem é de R$ ${this.balance}`);
			  console.log(`O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`);
        }  
          console.log(
          `Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
          this.balance}. Para realizar essa transferência você precisa ter ${amount} em conta.`
          );
    }
}

module.exports = { CurrentAccount }