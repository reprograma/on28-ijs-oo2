class BankAccount {
  #balance
  constructor(client, bank, accountNumber, agencyNumber, balance) {
    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this.#balance = balance || 0;
  }

  get balance() {
    return this.#balance;
  }

  set balance(newBalance) {
    this.#balance = newBalance;
  }

  creditAmount(amount) {
    this.#balance -= amount;
  }

  debitAmount(amount) {
    this.#balance += amount;
  }

  transferTo(amount, bankAccount) {
    if (bankAccount instanceof BankAccount) {
      if (this.bank.bankCode !== bankAccount.bank.bankCode) {
        let amountToBeDebited = amount + (amount * this.bank.transferTax);
          if (this.balance > amountToBeDebited) {
            this.creditAmount(amountToBeDebited);
            bankAccount.debitAmount(amount);
          } else {
            console.log('Saldo insuficiente');
          }
      } else {
        if (this.balance > amount) {
          this.creditAmount(amount);
          bankAccount.debitAmount(amount);
        } else {
          console.log('Saldo insuficiente');
        }
      }
    } else {
      console.log('Conta inválida');
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
				`Você possui um saldo de R$ ${
					this.#balance
				}. Para encerrar a conta é necessário que o saldo seja igual a zero.`
			);
		}
	}

  cashWithdrawal(amount) {
    if (this.balance < amount) {
      this.creditAmount(amount);
    } else {
      console.log('Saldo insuficiente');
    }
  }
}

class CurrentAccount extends BankAccount {
  transferTo(amount, bankAccount) {
    super.transferTo(amount, bankAccount)
  }
}

class SavingAccount extends BankAccount {
  #qtdWithdrawal;
  #withdrawalTax;
  constructor(client, bank, accountNumber, agencyNumber, balance, incomeRate, incomeDay) {
    super(client, bank, accountNumber, agencyNumber, balance);
    this.incomeRate = incomeRate;
    this.incomeDay = incomeDay;
    this.#qtdWithdrawal = 0;
    this.MAX_OF_WITHDRAWALS = 2;
    this.#withdrawalTax = 1.02;
  }

  get qtdWithdrawal() {
    return this.#qtdWithdrawal;
  }

  get withdrawalTax() {
    return this.#withdrawalTax;
  }

  set withdrawalTax(newWithdrawalTax) {
    this.#withdrawalTax = newWithdrawalTax;
  }

  generateIncome(currentDay) {
    if (currentDay === this.incomeDay) {
      const income = this.balance += this.balance * this.incomeRate;
      console.log(`Rendimento gerado: ${income}`);
    }
  }

  cashWithdrawal(amount) {
    const remainingFreeWithdrawals = Math.max(0, this.MAX_OF_WITHDRAWALS - this.#qtdWithdrawal);
    // foi insiderido o Math.max para que o valor não seja negativo

    console.log(`Quantidade de retiradas gratuitas: ${remainingFreeWithdrawals}`);
    console.log(`Quantidade de retiradas já feitas: ${this.#qtdWithdrawal}`);

    if (this.#qtdWithdrawal < this.MAX_OF_WITHDRAWALS) {
      if (this.balance >= amount) {
        this.#qtdWithdrawal++;
        this.balance -= amount;
        console.log(`Retirada de R$ ${amount} realizada com sucesso.`);
      } else {
        console.log('Saldo insuficiente para a retirada.');
      }
    } else {
      if (this.balance >= amount) {
        this.#qtdWithdrawal++;
        this.balance -= amount * this.#withdrawalTax;
        console.log(`Retirada de R$ ${amount} com taxa de R$ ${amount * this.#withdrawalTax} aplicada.`);
      } else {
        console.log('Saldo insuficiente para a retirada.');
      }
    }
    console.log(`Saldo: R$ ${this.balance}`);
  }

}

const bankAccount = new BankAccount('João', 'Banco XYZ', '123456', '7890', 1000);

console.log('Informações da Conta Bancária:');
console.log('Cliente:', bankAccount.client);
console.log('Banco:', bankAccount.bank);
console.log('Número da Conta:', bankAccount.accountNumber);
console.log('Número da Agência:', bankAccount.agencyNumber);
console.log('Saldo:', bankAccount.balance);

const anotherBankAccount = new BankAccount('Maria', 'Banco ABC', '987654', '5432', 500);
console.log('\nTransferência:');
bankAccount.transferTo(200, anotherBankAccount);
console.log('Saldo após transferência:', bankAccount.balance);
console.log('Saldo da outra conta após transferência:', anotherBankAccount.balance);

const currentAccount = new CurrentAccount('Alice', 'Banco DEF', '135792', '8642', 1500);

console.log('\nInformações da Conta Corrente:');
console.log('Cliente:', currentAccount.client);
console.log('Banco:', currentAccount.bank);
console.log('Número da Conta:', currentAccount.accountNumber);
console.log('Número da Agência:', currentAccount.agencyNumber);
console.log('Saldo da conta corrente:', currentAccount.balance);

console.log('\nTransferência da Conta Corrente:');
currentAccount.transferTo(300, anotherBankAccount);
console.log('Saldo da conta corrente após transferência:', currentAccount.balance);
console.log('Saldo da outra conta após transferência:', anotherBankAccount.balance);

console.log('\nTransferência da Conta Corrente:');
currentAccount.transferTo(1500, anotherBankAccount);
console.log('Saldo da conta corrente após transferência:', currentAccount.balance);
console.log('Saldo da outra conta após transferência:', anotherBankAccount.balance);

const joaoAccount = new SavingAccount('João', 'Banco XYZ', '123456', '7890', 1000, 0.05, 15);

console.log('Informações da Conta de João:');
console.log('Cliente:', joaoAccount.client);
console.log('Banco:', joaoAccount.bank);
console.log('Número da Conta:', joaoAccount.accountNumber);
console.log('Número da Agência:', joaoAccount.agencyNumber);
console.log('Saldo da conta de João:', joaoAccount.balance);

console.log('\nGeração de Rendimento na Conta de João:');
joaoAccount.generateIncome(15); // Simulando o rendimento no dia 15
console.log('Saldo da conta de João após rendimento:', joaoAccount.balance);

console.log('\n');

joaoAccount.cashWithdrawal(100); // Primeira retirada gratuita
joaoAccount.cashWithdrawal(50);  // Segunda retirada gratuita
joaoAccount.cashWithdrawal(200); // Terceira retirada com taxa
joaoAccount.cashWithdrawal(500); // Quarta retirada com taxa
joaoAccount.cashWithdrawal(200); // Quinta retirada com saldo insuficiente

module.exports = BankAccount, CurrentAccount, SavingAccount;