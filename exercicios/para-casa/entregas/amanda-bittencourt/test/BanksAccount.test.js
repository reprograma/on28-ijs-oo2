import { Bank } from "../Bank.js";
import { Client } from "../Client.js";
import { BanksAccount } from "../BanksAccount.js";
import {SavingAccount} from "../SavingAccount.js";

// Testes para a classe BanksAccount
describe("BanksAccount", () => {
  let client;
  let bank;
  let account;

  beforeEach(() => {
    client = new Client("Ada", "987654321", []);
    bank = new Bank("BancoBonito", "001", 0.05);
    account = new SavingAccount(client, bank, "12345", "6789");
  });

  // Testes para o método creditAmount
  test("creditAmount deve aumentar saldo corretamente", () => {
    account.creditAmount(100);
    expect(account.balance).toBe(100);
  });

  // Testes para o método debitAmount
  test("debitAmount deve diminuir saldo corretamente", () => {
    account.creditAmount(200);
    account.debitAmount(100);
    expect(account.balance).toBe(100);
  });

  // Testes para o método transferTo
  test("transferTo deve transferir corretamente o valor entre contas", () => {
    const anotherClient = new Client("Jorja Smith", "987654321", []);
    const anotherAccount = new BanksAccount(anotherClient, bank, "54321", "9876");
    account.creditAmount(200);
    account.transferTo(anotherAccount, 50);
    expect(account.balance).toBe(150);
    expect(anotherAccount.balance).toBe(50);
  });

  // Testes para o método closeAccount
  test("closeAccount deve fechar a conta com saldo zerado", () => {
    account.closeAccount();
    expect(account.client).toBeUndefined();
    expect(account.accountNumber).toBeUndefined();
    expect(account.agencyNumber).toBeUndefined();
    expect(account.bank).toBeUndefined();
  });

  // Testes para o método cashWithdrawal
  test("cashWithdrawal deve diminuir saldo corretamente", () => {
    account.creditAmount(200);
    account.cashWithdrawal(100);
    expect(account.balance).toBe(100);
  });

  test("cashWithdrawal deve continuar mesmo com saldo insuficiente, devido ao seu credito", () => {
    account.creditAmount(50);
    account.cashWithdrawal(100);
    expect(account.balance).toBe(50);
  });
});

