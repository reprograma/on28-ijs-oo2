import { SavingAccount } from "../SavingAccount.js";
import { BanksAccount } from "../BanksAccount.js";

describe("SavingAccount", () => {
  let client;
  let bank;
  let savingAccount;

  beforeEach(() => {
    client = { name: "John Doe", cpf: "123456789" };
    bank = { bankCode: "001", bankName: "ABC Bank", transferTax: 0.05 };
    savingAccount = new SavingAccount(client, bank, "12345", "6789", 0.1, 15);
  });

  // Testes para o método cashWithdrawal
  test("cashWithdrawal should allow free withdrawals up to the maximum limit", () => {
    savingAccount.creditAmount(1000);
    savingAccount.cashWithdrawal(200);
    expect(savingAccount.balance).toBe(800);
    savingAccount.cashWithdrawal(300);
    expect(savingAccount.balance).toBe(500);
  });

  test("cashWithdrawal should apply withdrawal tax after reaching the maximum limit", () => {
    savingAccount.creditAmount(1000);
    savingAccount.cashWithdrawal(200);
    savingAccount.cashWithdrawal(300);
    savingAccount.cashWithdrawal(200);
    expect(savingAccount.balance).toBe(460);
  });

  test("cashWithdrawal should handle insufficient balance", () => {
    savingAccount.cashWithdrawal(200);
    expect(savingAccount.balance).toBe(0);
  });

  // Testes para o método generateIncome
  test("generateIncome should credit income to the account on the specified income day", () => {
    savingAccount.creditAmount(1000);
    savingAccount.generateIncome(15);
    expect(savingAccount.balance).toBeGreaterThan(1000);
  });

  test("generateIncome should not credit income to the account on other days", () => {
    savingAccount.creditAmount(1000);
    savingAccount.generateIncome(20);
    expect(savingAccount.balance).toBe(1000);
  });
});

// Observação: Certifique-se de adaptar os imports e ajustar os caminhos dos arquivos conforme a sua estrutura de pastas.
