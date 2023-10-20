const BankAccount = require('../kauana-tombolato/BankAccount');

describe('BankAccount', () => {
  let client;
  let bank;
  let bankAccount1;
  let bankAccount2;

  beforeEach(() => {
    client = {
      removeBank: jest.fn(),
    };

    bank = { bankCode: 'ABC' };

    bankAccount1 = new BankAccount(client, bank, '12345', '6789', 1000);
    bankAccount2 = new BankAccount(client, bank, '54321', '9876', 500);
  });

  test('should have client, bank, accountNumber, and agencyNumber properties', () => {
    expect(bankAccount1.client).toBe(client);
    expect(bankAccount1.bank).toBe(bank);
    expect(bankAccount1.accountNumber).toBe('12345');
    expect(bankAccount1.agencyNumber).toBe('6789');
  });

  test('should have a balance property', () => {
    expect(bankAccount1.balance).toBe(1000);
  });

  test('should be able to credit an amount to the balance', () => {
    bankAccount1.creditAmount(200);
    expect(bankAccount1.balance).toBe(800);
  });

  test('should be able to debit an amount from the balance', () => {
    bankAccount1.debitAmount(200);
    expect(bankAccount1.balance).toBe(1200);
  });

  test('should be able to transfer an amount to another bank account', () => {
    bankAccount1.transferTo(200, bankAccount2);
    expect(bankAccount1.balance).toBe(800);
    expect(bankAccount2.balance).toBe(700);
  });

  test('should not be able to transfer to an invalid bank account', () => {
    const invalidAccount = { name: 'Invalid' };
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    bankAccount1.transferTo(200, invalidAccount);
    expect(consoleSpy).toHaveBeenCalledWith('Conta inválida');
  });

  test('should be able to close the account and remove it from the client', () => {
    bankAccount1.closeAccount();
    expect(client.removeBank).toHaveBeenCalledWith(bank);
  });
});