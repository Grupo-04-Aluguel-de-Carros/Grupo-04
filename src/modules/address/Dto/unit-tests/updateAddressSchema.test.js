/* eslint-disable no-undef */
import { updateAddressSchema } from '../updateAddressSchema.js';

describe('update an address', () => {
  describe('when a valid body', () => {
    it('should validates a body with all fields', () => {
      const validInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: null,
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(validInput);

      expect(schema.success).toBe(true);
    });

    it('should validates a body with all fields', () => {
      const validInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: null,
          userId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(validInput);

      expect(schema.success).toBe(true);
    });

    it('should validates a body with all fields', () => {
      const validInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(validInput);

      expect(schema.success).toBe(true);
    });
  });

  describe('when an invalid body', () => {
    it('should return an error for a body without "params"', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: null,
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Required');
      }
    });

    it('should return an error for a params without "id"', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: null,
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {},
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Required');
      }
    });

    it('should return an error for a params where "id" is a number', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: null,
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: { id: 1 },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a params where "id" is an array', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: null,
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: { id: [1] },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });
    it('should return an error for a body without "cep"', () => {
      const invalidInput = {
        body: {
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo obrigatório');
      }
    });

    it('should return an error for a body where "cep" is an empty string', () => {
      const invalidInput = {
        body: {
          cep: '',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Cep inválido');
      }
    });

    it('should return an error for a body with 1 caracter in "cep"', () => {
      const invalidInput = {
        body: {
          cep: '1',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Cep inválido');
      }
    });

    it('should return an error for a body where "cep" is not a string', () => {
      const invalidInput = {
        body: {
          cep: 1,
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "cep" is not a string', () => {
      const invalidInput = {
        body: {
          cep: [1],
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body where "cep" is not a valid string', () => {
      const invalidInput = {
        body: {
          cep: '   ',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Cep inválido');
      }
    });

    it('should return an error for a body where "cep" is not a valid string', () => {
      const invalidInput = {
        body: {
          cep: 'abcd',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Cep inválido');
      }
    });

    it('should return an error for a body without "street"', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo obrigatório');
      }
    });

    it('should return an error for a body where "street" is an empty string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: '',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo "rua" precisa de ao menos 2 caracteres'
        );
      }
    });

    it('should return an error for a body with 1 caracter in "street"', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Q',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo "rua" precisa de ao menos 2 caracteres'
        );
      }
    });

    it('should return an error for a body where "street" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 1,
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "street" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: ['Quadra QR 316 Conjunto 6'],
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body without "city"', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo obrigatório');
      }
    });

    it('should return an error for a body where "city" is an empty string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: '',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo "cidade" precisa de ao menos 2 caracteres'
        );
      }
    });

    it('should return an error for a body with 1 caracter in "city"', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'B',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo "cidade" precisa de ao menos 2 caracteres'
        );
      }
    });

    it('should return an error for a body where "city" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 1,
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "city" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: ['Brasília'],
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body without "state"', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          city: 'Brasília',
          street: 'Quadra QR 316 Conjunto 6',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo obrigatório');
      }
    });

    it('should return an error for a body where "state" is an empty string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: '',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo "estado" precisa de ao menos 4 caracteres'
        );
      }
    });

    it('should return an error for a body with 1 caracter in "state"', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'D',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo "estado" precisa de ao menos 4 caracteres'
        );
      }
    });

    it('should return an error for a body where "state" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 1,
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "state" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: ['Distrito Federal'],
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body without "number"', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: null,
          userId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo obrigatório');
      }
    });

    it('should return an error for a body where "number" is an empty string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: null,
          userId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo "numero" precisa de ao menos 1 caracter'
        );
      }
    });

    it('should return an error for a body where "number" is not a caracter of number', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: 'a',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Número inválido');
      }
    });

    it('should return an error for a body where "number" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: 1,
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "number" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: ['1'],
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body without "neighborhood"', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo obrigatório');
      }
    });

    it('should return an error for a body where "neighborhood" is an empty string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: '',
          complement: null,
          userId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo "bairro" precisa de ao menos 2 caracteres'
        );
      }
    });

    it('should return an error for a body where "neighborhood" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 1,
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "neighborhood" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: ['Samambaia Sul (Samambaia)'],
          complement: 'Casa 2',
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body where "complement" is an empty string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: '',
          userId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo "complemento" não pode estar vazio'
        );
      }
    });

    it('should return an error for a body where "complement" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: 1,
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "complement" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: ['Casa 2'],
          storeId: '08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body where "storeId" is an empty string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: null,
          storeId: '',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo "storeId" precisa de ao menos 4 caracteres'
        );
      }
    });

    it('should return an error for a body where "storeId" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: null,
          storeId: 1,
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "storeId" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: ['Casa 2'],
          storeId: ['08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b'],
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body where "userId" is an empty string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: null,
          userId: '',
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O campo "userId" precisa de ao menos 4 caracteres'
        );
      }
    });

    it('should return an error for a body where "userId" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: null,
          userId: 1,
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "userId" is not a string', () => {
      const invalidInput = {
        body: {
          cep: '72308606',
          street: 'Quadra QR 316 Conjunto 6',
          city: 'Brasília',
          state: 'Distrito Federal',
          number: '1',
          neighborhood: 'Samambaia Sul (Samambaia)',
          complement: ['Casa 2'],
          userId: ['08980ab9-d9ef-4d1b-b7d8-a9b73eb3be4b'],
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = updateAddressSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });
  });
});
