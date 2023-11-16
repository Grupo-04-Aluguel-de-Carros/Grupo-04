/* eslint-disable no-undef */
// import { jest } from 'jest';
import { createStoreSchema } from '../createStoreSchema.js';

describe('register store schema', () => {
  describe('when a valid body', () => {
    it('should validates a body with all fields', () => {
      const validInput = {
        body: {
          name: 'Teste1',
        },
      };
      const schema = createStoreSchema.safeParse(validInput);

      expect(schema.success).toBe(true);
    });
  });

  describe('when an invalid body', () => {
    it('should return an error for a body without "name"', () => {
      const invalidInput = {
        body: {
          name: '',
        },
      };
      const schema = createStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo nome deve ter ao menos 2 caracteres'
        );
      }
    });
    it('should return an error for a body with 2 caracteres in "name"', () => {
      const invalidInput = {
        body: {
          name: 'ab',
        },
      };
      const schema = createStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo nome deve ter ao menos 2 caracteres'
        );
      }
    });
    it('should return an error for a body where "name" is not a string', () => {
      const invalidInput = {
        body: {
          name: 1,
        },
      };
      const schema = createStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });
    it('should return an error for a body where "name" is not a string', () => {
      const invalidInput = {
        body: {
          name: ['1'],
        },
      };
      const schema = createStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });
    it('should return an error for a body where "name" is not a valid string', () => {
      const invalidInput = {
        body: {
          name: '    ',
        },
      };
      const schema = createStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo nome deve ter ao menos 2 caracteres'
        );
      }
    });
  });
});
