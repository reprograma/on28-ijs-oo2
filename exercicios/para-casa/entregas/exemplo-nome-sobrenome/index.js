
const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { SavingAccount } = require('./SavingAccount');
const { CurrentAccount } = require('./CurrentAccount');

const bank01 = new Bank(200, 'Banco Itau', 0.02);
const bank02 = new Bank(300, 'Banco Santander', 0.03);


const client01 = new Client('Heloiza', 987654321);
const client02 = new Client('Ana', 123456789);


client01.addBank(bank01); 
client01.addBank(bank01); 
client01.addBank(bank02);
client01.removeBank(bank02); 
client01.removeBank(bank02); 

client02.addBank(bank01); 
client02.addBank(bank02); 


console.log(Bank.createdBanks); 

console.log(bank01);
console.log(bank02);


console.log(client01);
console.log(client02);

const currentAccount1 = new CurrentAccount(client01, bank01, 9999, 5555);
const currentAccount2 = new CurrentAccount(client02, bank02, 2222, 7777);


currentAccount1.creditAmount(8000);
currentAccount2.creditAmount(3000); 


currentAccount1.transferTo(currentAccount2, 2000);
currentAccount2.transferTo(currentAccount1, 3000);


currentAccount1.cashWithdrawal(400); 
currentAccount1.cashWithdrawal(800); 
currentAccount1.cashWithdrawal(100);
currentAccount1.cashWithdrawal(200); 

const savingAccount01 = new SavingAccount(client02, bank01, 2222, 1111, 0.1, 50);

savingAccount01.creditAmount(900);
savingAccount01.debitAmount(500); 
savingAccount01.generateIncome(1220); 


