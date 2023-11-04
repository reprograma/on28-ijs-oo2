import { Bank } from "../Bank.js";

describe("Bank", () => {
  let bank;

  beforeEach(() => {
    bank = new Bank("001", "BancoBonito", 0.05);
  });


  test("Deve criar instância de Bank corretamente", () => {
    expect(bank.bankCode).toBe("001");
    expect(bank.bankName).toBe("ABC Bank");
    expect(bank.transferTax).toBe(0.05);
  });

  test("a transferTax deve ser obtida corretamente", () => {
    expect(bank.transferTax).toBe(0.05);
  });


  test("createdBanks deve ser um array e novo banco é adicionado corretamente", () => {
    expect(Array.isArray(Bank.createdBanks)).toBe(true);
    expect(Bank.createdBanks.length).toBe(1);
    expect(Bank.createdBanks[0].bankCode).toBe("001");
    expect(Bank.createdBanks[0].qtdClients).toBe(0);
  });
  

  test("deve atualizar a quantidade de clientescorretamente", () => {
    bank.constructor.createdBanks[0].qtdClients = 10;
    expect(Bank.createdBanks[0].qtdClients).toBe(10);
  });
});

