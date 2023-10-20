const Client = require('../kauana-tombolato/Client');

describe('Client', () => {
  let client;
  const bank1 = { bankCode: 'ABC' };
  const bank2 = { bankCode: 'XYZ' };

  beforeEach(() => {
    client = new Client('Alice', '1234567890', [{ bank: bank1 }, { bank: bank2 }]);
  });

  test('should have a name and CPF', () => {
    expect(client.name).toBe('Alice');
    expect(client.cpf).toBe('1234567890');
  });

  test('should be able to check if they have an account in a specific bank', () => {
    expect(client.hasAccountInThisBank(bank1)).toBe(true);
    expect(client.hasAccountInThisBank({ bankCode: 'DEF' })).toBe(false);
  });

  test('should be able to add a bank account', () => {
    const newBank = { bank: { bankCode: 'LMN' } };
    client.addBank(newBank);
    expect(client.banks).toContainEqual(newBank);
  });

  test('should be able to remove a bank account', () => {
    client.removeBank(bank1);
    expect(client.banks).not.toContainEqual({ bank: bank1 });
  });
});