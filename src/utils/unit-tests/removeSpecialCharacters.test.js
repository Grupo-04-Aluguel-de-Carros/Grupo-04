// removeSpecialCharacters.test.js
/* eslint-disable no-undef */
import { removeSpecialCharacters } from '../removeSpecialCharacters.js';

describe('removeSpecialCharacters Tests', () => {
  it('should remove dots from the string', () => {
    const inputString = 'abc.def.123';
    const result = removeSpecialCharacters(inputString);
    expect(result).toBe('abcdef123');
  });

  it('should remove slashes from the string', () => {
    const inputString = 'abc/def/123';
    const result = removeSpecialCharacters(inputString);
    expect(result).toBe('abcdef123');
  });

  it('should remove backslashes from the string', () => {
    const inputString = 'abc\\def\\123';
    const result = removeSpecialCharacters(inputString);
    expect(result).toBe('abcdef123');
  });

  it('should remove parentheses from the string', () => {
    const inputString = 'abc(def)123';
    const result = removeSpecialCharacters(inputString);
    expect(result).toBe('abcdef123');
  });

  it('should remove hyphens from the string', () => {
    const inputString = 'abc-def-123';
    const result = removeSpecialCharacters(inputString);
    expect(result).toBe('abcdef123');
  });

  it('should handle an empty string', () => {
    const inputString = '';
    const result = removeSpecialCharacters(inputString);
    expect(result).toBe('');
  });

  it('should handle a string with no special characters', () => {
    const inputString = 'abcdef123';
    const result = removeSpecialCharacters(inputString);
    expect(result).toBe('abcdef123');
  });
});
