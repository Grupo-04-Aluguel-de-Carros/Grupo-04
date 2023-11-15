/* eslint-disable no-undef */
// import { jest } from 'jest';
import { updateStoreSchema } from '../updateStoreSchema.js';

describe('update store schema', () => {
  describe('when a valid body', () => {
    it('should validates a body with all fields', () => {
      const validInput = {
        body: {
          name: 'Teste1',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateStoreSchema.safeParse(validInput);

      expect(schema.success).toBe(true);
    });
  });

  describe('when an invalid body', () => {
    it('should return an error for a body without "params"', () => {
      const invalidInput = {
        body: {
          name: 'Teste1',
        },
      };
      const schema = updateStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Required');
      }
    });

    it('should return an error for a params without "id"', () => {
      const invalidInput = {
        body: {
          name: 'Teste1',
        },
        params: {},
      };
      const schema = updateStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Required');
      }
    });

    it('should return an error for a params where "id" is a number', () => {
      const invalidInput = {
        body: {
          name: 'Teste1',
        },
        params: { id: 1 },
      };
      const schema = updateStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a params where "id" is an array', () => {
      const invalidInput = {
        body: {
          name: 'Teste1',
        },
        params: { id: [1] },
      };
      const schema = updateStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });
    it('should return an error for a body without "name"', () => {
      const invalidInput = {
        body: {
          name: '',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo nome deve ter ao menos 2 caracteres'
        );
      }
    });
    it('should return an error for a body with 1 caracter in "name"', () => {
      const invalidInput = {
        body: {
          name: 'a',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateStoreSchema.safeParse(invalidInput);
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
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateStoreSchema.safeParse(invalidInput);
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
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateStoreSchema.safeParse(invalidInput);
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
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateStoreSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo nome deve ter ao menos 2 caracteres'
        );
      }
    });
  });
});
