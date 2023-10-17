import { Bank } from "../Bank.js";
import { Client } from "../Client.js";

describe("Client", () => {
  let client;
  let bank;

  beforeEach(() => {
    client = new Client("Ada", "123456789");
    bank = new Bank("001", "BancoBonito", 0.05);
  });

  // Testes para o método hasAccountInThisBank
  test("hasAccountInThisBank retorna true se o cliente tem conta existente", () => {
    client.addBank(bank);
    expect(client.hasAccountInThisBank(bank)).toBe(true);
  });

  test("hasAccountInThisBank retorna false se o cliente nao tem conta existente", () => {
    expect(client.hasAccountInThisBank(bank)).toBe(false);
  });

  // Testes para o método addBank
  test("addBank deve add um banco a lista de bancos do cliente", () => {
    client.addBank(bank);
    expect(client.banks.length).toBe(1);
    expect(client.banks[0]).toBe(bank);
  });

  test("addBank deve aumentar o numero de clientes para o banco", () => {
    client.addBank(bank);
    expect(Bank.createdBanks[0].qtdClients).toBe(1);
  });

  test("addBank deve retornar erro para banco invalido", () => {
    const invalidBank = { bankCode: "002", bankName: "Invalid Bank", transferTax: 0.1 };
    client.addBank(invalidBank);
    expect(client.banks.length).toBe(0);
    expect(Bank.createdBanks[0].qtdClients).toBe(0);
  });

  // Testes para o método removeBank
  test("removeBank deve remover o banco da lista de clientes", () => {
    client.addBank(bank);
    client.removeBank(bank);
    expect(client.banks.length).toBe(0);
  });

  test("removeBank deve diminuir o numero de clientes para o banco", () => {
    client.addBank(bank);
    client.removeBank(bank);
    expect(Bank.createdBanks[0].qtdClients).toBe(0);
  });

  test("removeBank com input errado de tipo de banco não deve passar", () => {
    const invalidBank = { bankCode: "002", bankName: "Invalid Bank", transferTax: 0.1 };
    client.removeBank(invalidBank);
    expect(client.banks.length).toBe(0);
    expect(Bank.createdBanks[0].qtdClients).toBe(0);
  });
});