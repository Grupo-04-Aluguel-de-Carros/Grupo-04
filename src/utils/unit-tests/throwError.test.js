// errorHandling.test.js
/* eslint-disable no-undef */
import { CustomError, throwError } from '../throwError.js';

describe('Error Handling Tests', () => {
  describe('CustomError Class', () => {
    it('should create a CustomError instance with default status code (400)', () => {
      const errorMessage = 'Custom error message';
      const error = new CustomError(errorMessage);
      expect(error.message).toBe(errorMessage);
      expect(error.statusCode).toBe(400);
    });

    it('should create a CustomError instance with a specified status code', () => {
      const errorMessage = 'Custom error message';
      const statusCode = 404;
      const error = new CustomError(errorMessage, statusCode);
      expect(error.message).toBe(errorMessage);
      expect(error.statusCode).toBe(statusCode);
    });
  });

  describe('throwError Function', () => {
    it('should throw a CustomError with default status code (400)', () => {
      const errorMessage = 'Error thrown by throwError';
      expect(() => throwError(errorMessage)).toThrowError(CustomError);
      try {
        throwError(errorMessage);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
        expect(error.statusCode).toBe(400);
      }
    });

    it('should throw a CustomError with a specified status code', () => {
      const errorMessage = 'Error thrown by throwError';
      const statusCode = 500;
      expect(() => throwError(errorMessage, statusCode)).toThrowError(
        CustomError
      );
      try {
        throwError(errorMessage, statusCode);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
        expect(error.statusCode).toBe(statusCode);
      }
    });
  });
});
