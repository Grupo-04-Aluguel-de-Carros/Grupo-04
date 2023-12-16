// index.test.js
/* eslint-disable no-undef */
import * as indexExports from '../index.js';

describe('Index File Exports', () => {
  it('should export validateCPF from cpfValidator.js', () => {
    expect(indexExports.validateCPF).toBeDefined();
  });

  it('should export generateAccessToken from jwt.js', () => {
    expect(indexExports.generateAccessToken).toBeDefined();
  });

  it('should export a CustomError from throwError.js', () => {
    expect(indexExports.CustomError).toBeDefined();
  });

  it('should export removeSpecialCharacters from removeSpecialCharacters.js', () => {
    expect(indexExports.removeSpecialCharacters).toBeDefined();
  });
});
