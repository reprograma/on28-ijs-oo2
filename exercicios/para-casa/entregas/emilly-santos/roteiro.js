// Importações
const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { CurrentAccount } = require('./CurrentAccount')
const { SavingAccount } = require('./SavingAccount')

// Criação de clientes
const client1 = new Client("João", "12345678901");
const client2 = new Client("Maria", "98765432101");

//Ctiação de bancos
const bank1 = new Bank(123, "Bank A", 0.02);
const bank2 = new Bank(456, "Bank B", 0.03);

client1.addBank(bank1);
client2.addBank(bank1);
client1.addBank(bank2);

console.log(`Client ${client1.name} has an account in Bank A: ${client1.hasAccountInThisBank(bank1)}`);
console.log(`Client ${client1.name} has an account in Bank B: ${client1.hasAccountInThisBank(bank2)}`);
console.log(`Client ${client2.name} has an account in Bank A: ${client2.hasAccountInThisBank(bank1)}`);

//client1.removeBank(bank1);

console.log(`Client ${client1.name} has an account in Bank A: ${client1.hasAccountInThisBank(bank1)}`);

console.log(Bank.createdBanks);

console.log(bank1);
console.log(bank2);

// Conferindo clientes
console.log(client1);
console.log(client2);

/** CONTA CORRENTE */
// Criação de conta corrente
const account1 = new CurrentAccount(client1, bank1, 12345, 6789);
const account2 = new CurrentAccount(client2, bank1, 54321, 5555);
console.log(account1)
console.log(account2)

// Utilizando os métodos de Conta Corrente
account1.creditAmount(5000); // O novo saldo da conta após o crédito é: R$ 5000,00
console.log()
account2.creditAmount(2000); // O novo saldo da conta após o crédito é: R$ 2000,00

// Transferência entre bancos diferentes
account1.transferTo(account2, 1500);
account2.transferTo(account1, 50);

/** Exemplo de saídas:
  O saldo atual da conta de origem é de R$ 3500
  O saldo atual da conta de destino é de R$ 3500
  ---
  // Saldo insuficiente para realizar a transferência. Seu saldo atual é de 3500.
  Para realizar essa transferência você precisa ter 5000 em conta.
*/

// Retirada em banco 24 horas
account2.cashWithdrawal(100); // Retirada realizada. O saldo atual da conta é de R$ 3385.
account2.cashWithdrawal(500); // Retirada realizada. O saldo atual da conta é de R$ 2885.
account2.cashWithdrawal(200); // Retirada realizada. O saldo atual da conta é de R$ 2685.
account2.cashWithdrawal(300); // Retirada realizada. O saldo atual da conta é de R$ 2385.

/** CONTA POUPANÇA */
// Criação de conta poupança
const savingAccount1 = new SavingAccount(client2, bank1, 5555, 6666, 0.1, 20);
const savingAccount2 = new SavingAccount(client1, bank2, 777, 2222, 0.1, 20);

// Utilizando os métodos de Conta Poupança
savingAccount1.creditAmount(1300); // O novo saldo da conta após o crédito é: R$ 1300,00
savingAccount1.debitAmount(300); // O novo saldo da conta após o débito é: R$ 1000,00
savingAccount1.generateIncome(20); // Seu novo saldo após rendimentos é de R$ 1100,00

// Transferência entre bancos diferentes
savingAccount1.transferTo(savingAccount2, 100);

// Retirada em banco 24 horas
savingAccount2.creditAmount(1000); // O novo saldo da conta após o crédito é: R$ 1000,00
savingAccount2.cashWithdrawal(100);
savingAccount2.cashWithdrawal(500);
savingAccount2.cashWithdrawal(200);
savingAccount2.cashWithdrawal(300);