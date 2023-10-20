const Bank = require('../kauana-tombolato/Bank');

describe('Bank', () => {
  describe('constructor', () => {
    it('should create a new Bank', () => {
      const bank = new Bank(1, 'Banco do Brasil', 1.5);
      expect(bank).toBeInstanceOf(Bank);
    });
  });

  describe('#transferTax', () => {
    it('should return the transfer tax', () => {
      const bank = new Bank(1, 'Banco do Brasil', 1.5);
      expect(bank.transferTax).toBe(1.5);
    });
  });
});