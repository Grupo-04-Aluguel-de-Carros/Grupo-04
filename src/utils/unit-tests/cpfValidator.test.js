/* eslint-disable no-undef */
import { validateCPF } from '../cpfValidator.js';

describe('CPF Validation Tests', () => {
  describe('Valid CPFs', () => {
    it('should return true for a CPF with punctuation marks', () => {
      const validCPF = '082.829.660-02';
      const result = validateCPF(validCPF);
      expect(result).toBe(true);
    });

    it('should return true for a CPF without punctuation marks', () => {
      const validCPF = '08282966002';
      const result = validateCPF(validCPF);
      expect(result).toBe(true);
    });
  });

  describe('Invalid CPFs', () => {
    it('should return false for an invalid CPF with one incorrect digit', () => {
      const invalidCPF = '08282966003';
      const result = validateCPF(invalidCPF);
      expect(result).toBe(false);
    });

    it('should return false for an invalid CPF with fewer than 11 digits', () => {
      const invalidCPF = '0828296600';
      const result = validateCPF(invalidCPF);
      expect(result).toBe(false);
    });

    it('should return false for an invalid CPF with more than 11 digits', () => {
      const invalidCPF = '082829660022';
      const result = validateCPF(invalidCPF);
      expect(result).toBe(false);
    });

    it('should return false for an invalid CPF with an incorrect first digit', () => {
      const invalidCPF = '28282966002';
      const result = validateCPF(invalidCPF);
      expect(result).toBe(false);
    });
  });
});
