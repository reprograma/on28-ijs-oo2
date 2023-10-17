import { CurrentAccount } from "../CurrentAccount.js";
import { BanksAccount } from "../BanksAccount.js";

describe("CurrentAccount", () => {
  let senderAccount;
  let receiverAccount;

  beforeEach(() => {
    senderAccount = new CurrentAccount(new BanksAccount());
    receiverAccount = new BanksAccount();
  });

  // Teste para verificar transferência bem-sucedida com saldo suficiente
  test("transferTo should transfer correct amount between accounts with sufficient balance", () => {
    senderAccount.creditAmount(200);
    senderAccount.transferTo(receiverAccount, 100);
    expect(senderAccount.balance).toBe(100);
    expect(receiverAccount.balance).toBe(100);
  });

  // Teste para verificar mensagem de saldo insuficiente
  test("transferTo should display insufficient balance message when sender has insufficient funds", () => {
    senderAccount.creditAmount(50);
    senderAccount.transferTo(receiverAccount, 100);
    expect(senderAccount.balance).toBe(50);
    expect(receiverAccount.balance).toBe(0);
  });

  test("mensagem de erro quando a conta de destino não é válida", () => {
    const invalidAccount = new BanksAccount();
    senderAccount.transferTo(invalidAccount, 50);
    expect(senderAccount.balance).toBe(0);
  });

  // Teste para verificar 
  test("mensagem de erro quando a conta de origem não é válida", () => {
    const invalidAccount = new CurrentAccount();
    invalidAccount.transferTo(receiverAccount, 50);
    expect(receiverAccount.balance).toBe(0);
  });
});

// Observação: Certifique-se de adaptar os imports e ajustar os caminhos dos arquivos conforme a sua estrutura de pastas.
