const Bank = require("./Bank.js");
const Client = require("./Client.js");
const BankAccount = require("./BankAccount.js");
const CurrentAccount = require("./CurrentAccount.js");
const SavingAccount = require("./SavingAccount.js");

//instanciações anteriores

const client1 = new Client("Joana", "12345");
const client2 = new Client("Paulo", "14523");
console.log(client1);

const bank1 = new Bank(200, "BoboBank", 0.01);
const bank2 = new Bank(300, "CrysBank", 0.03);
console.log(bank1);

client1.addBank(bank1);
console.log(bank1);
client2.addBank(bank2);
client1.removeBank(bank1);
console.log("createdBanks:", Bank.createdBanks);

console.log(client1.cpf);

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);
console.log(bankAccount1);

const bankAccount2 = new BankAccount(client2, bank2, 3333, 4444);
console.log(bankAccount2);

const bank3 = new Bank(200, "NewBank", 0.01);
const client3 = new Client("Julia", 215);
const bankAccount3 = new BankAccount(client3, bank3, 2563, 1478);

bankAccount1.credit(1330);
bankAccount1.debit(300);

bankAccount3.transferTo(bankAccount1, 200);
bankAccount1.transferTo(bankAccount2, 300);

console.log(bankAccount3.balance);

bankAccount3.closeAccount();
console.log(bankAccount3);

//instanciando currentAccount e savingAccount

const bank4 = new Bank(200, "Nubank");
const currentAccount1 = new CurrentAccount(client2, bank4, 5555, 6666);
const currentAccount2 = new CurrentAccount(client1, bank4, 5555, 6666);
console.log(currentAccount1);
currentAccount1.transferTo(currentAccount2, 1700);

const client = new Client("Joana", "12345");
const bank = new Bank(200, "BoboBank", 0.01);

const savingAccount = new SavingAccount(
  client,
  bank,
  1111,
  2222,
  0.05,
  "Monday"
);

console.log(savingAccount.balance);
savingAccount.cashWithdrawal(50);
savingAccount.cashWithdrawal(100);
savingAccount.cashWithdrawal(30);
savingAccount.cashWithdrawal(200);
