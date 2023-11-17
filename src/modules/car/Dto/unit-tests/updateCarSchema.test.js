/* eslint-disable no-undef */
import { updateCarSchema } from '../updateCarSchema.js';

describe('create car schema', () => {
  describe('when a valid body', () => {
    it('should validates a body with all fields', () => {
      const validInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(validInput);

      expect(schema.success).toBe(true);
    });
  });

  describe('when an invalid body', () => {
    it('should return an error for a body without "params"', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Required');
      }
    });

    it('should return an error for a params without "id"', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {},
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Required');
      }
    });

    it('should return an error for a params where "id" is a number', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: { id: 1 },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a params where "id" is an array', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: { id: [1] },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body with 1 caracteres in "name"', () => {
      const invalidInput = {
        body: {
          name: 'a',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O nome deve ter ao menos 2 caracteres'
        );
      }
    });

    it('should return an error for a body where "name" is not a string', () => {
      const invalidInput = {
        body: {
          name: 1,
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
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
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
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
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O nome deve ter ao menos 2 caracteres'
        );
      }
    });

    it('should return an error for a body where "color" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 1,
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "color" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: ['azul'],
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body where "color" is not a valid string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: '  ',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'A cor deve ter ao menos 1 caractere'
        );
      }
    });

    it('should return an error for a body where "storeId" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 1,
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "storeId" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: ['e2a8ecba-af7a-4d2c-b05b-049e5e66149b'],
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body where "storeId" is not a valid string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: '  ',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O id da loja é umm campo obrigatório'
        );
      }
    });

    it('should return an error for a body where "brandId" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: 1,
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "brandId" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: ['419adb8a-e855-453f-a8ef-537890516f87'],
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body where "brandId" is not a valid string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '  ',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O id da marca é umm campo obrigatório'
        );
      }
    });

    it('should return an error for a body where "available" is not a boolean', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: 1,
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected boolean, received number'
        );
      }
    });

    it('should return an error for a body where "available" is not a boolean', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: [true],
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected boolean, received array'
        );
      }
    });

    it('should return an error for a body where "available" is not a boolean', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: ' ',
          model: 'ferrari',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected boolean, received string'
        );
      }
    });

    it('should return an error for a body where "model" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 1,
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "model" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: ['ferrari'],
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body where "model" is not a valid string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: '  ',
          value: 1900.0,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O modelo é um campo obrigatório'
        );
      }
    });

    it('should return an error for a body where "value" is not a number', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: '1900.0',
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected number, received string'
        );
      }
    });

    it('should return an error for a body where "value" is not a number', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: [1900.0],
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected number, received array'
        );
      }
    });

    it('should return an error for a body where "value" is not a valid number', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900,
          year: '2022',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O modelo é um campo obrigatório'
        );
      }
    });

    it('should return an error for a body where "year" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: 2022,
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "year" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: ['2022'],
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body where "year" is not a valid string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '  ',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo inválido');
      }
    });

    it('should return an error for a body where "year" is not a valid string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: 'abc',
          description: 'ferrari bonita',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo inválido');
      }
    });

    it('should return an error for a body where "description" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2023',
          description: 1,
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "description" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2023',
          description: ['ferrari bonita'],
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body where "description" is not a valid string', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2023',
          description: '  ',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo de descrição precisa de ao menos 10 caracteres'
        );
      }
    });

    it('should return an error for a body where "description" there is less than 9 characteres', () => {
      const invalidInput = {
        body: {
          name: 'Gol',
          color: 'azul',
          storeId: 'e2a8ecba-af7a-4d2c-b05b-049e5e66149b',
          brandId: '419adb8a-e855-453f-a8ef-537890516f87',
          available: true,
          model: 'ferrari',
          value: 1900.0,
          year: '2023',
          description: 'ferrari',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateCarSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo de descrição precisa de ao menos 10 caracteres'
        );
      }
    });
  });
});
