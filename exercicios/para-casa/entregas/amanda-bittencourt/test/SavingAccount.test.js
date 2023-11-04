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
  test("cashWithdrawal deve permitir saques gratuitos ate o limite mazimo", () => {
    savingAccount.creditAmount(1000);
    savingAccount.cashWithdrawal(200);
    expect(savingAccount.balance).toBe(800);
    savingAccount.cashWithdrawal(300);
    expect(savingAccount.balance).toBe(500);
  });

  test("cashWithdrawal deve aplicar o imposto de saque depois que atingir o limite maximo", () => {
    savingAccount.creditAmount(1000);
    savingAccount.cashWithdrawal(200);
    savingAccount.cashWithdrawal(300);
    savingAccount.cashWithdrawal(200);
    expect(savingAccount.balance).toBe(460);
  });

  test("cashWithdrawal deve mostrar o saldo insuficiente", () => {
    savingAccount.cashWithdrawal(200);
    expect(savingAccount.balance).toBe(0);
  });

  // Testes para o método generateIncome
  test("generateIncome deve creditar o cliente na data especifica para deposito", () => {
    savingAccount.creditAmount(1000);
    savingAccount.generateIncome(15);
    expect(savingAccount.balance).toBeGreaterThan(1000);
  });

  test("generateIncome nao deve creditar em o deposito na conta em outros dias", () => {
    savingAccount.creditAmount(1000);
    savingAccount.generateIncome(20);
    expect(savingAccount.balance).toBe(1000);
  });
});