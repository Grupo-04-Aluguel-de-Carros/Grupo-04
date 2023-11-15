/* eslint-disable no-undef */
import { loginSchema } from '../loginSchema.js';

describe('login schema', () => {
  describe('when a valid body', () => {
    it('should validates a body with all fields', () => {
      const validInput = {
        body: {
          email: 'joao.santocristo@gmail.com',
          password: '12345678',
        },
      };
      const schema = loginSchema.safeParse(validInput);

      expect(schema.success).toBe(true);
    });
  });

  describe('when an invalid body', () => {
    it('should return an error for a body where "email" is not a valid email', () => {
      const invalidInput = {
        body: {
          email: 'joao.santocristo@',
          password: '12345678',
        },
      };
      const schema = loginSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Email inválido');
      }
    });

    it('should return an error for a body where "email" is not a valid email', () => {
      const invalidInput = {
        body: {
          email: 'joao.santocristo@mailcom',
          password: '12345678',
        },
      };
      const schema = loginSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Email inválido');
      }
    });

    it('should return an error for a body where "email" is not a valid email', () => {
      const invalidInput = {
        body: {
          email: 'joao.santocristomail.com',
          password: '12345678',
        },
      };
      const schema = loginSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Email inválido');
      }
    });

    it('should return an error for a body where "email" is not a valid email', () => {
      const invalidInput = {
        body: {
          email: '',
          password: '12345678',
        },
      };
      const schema = loginSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Email inválido');
      }
    });

    it('should return an error for a body where "password" is an empty string', () => {
      const invalidInput = {
        body: {
          email: 'joao.santocristo@gmail.com',
          password: '',
        },
      };
      const schema = loginSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'A senha deve ter ao menos 6 digitos'
        );
      }
    });

    it('should return an error for a body where "password" has less than 6 digits', () => {
      const invalidInput = {
        body: {
          email: 'joao.santocristo@gmail.com',
          password: '12345',
        },
      };
      const schema = loginSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'A senha deve ter ao menos 6 digitos'
        );
      }
    });

    it('should return an error for a body where "password" is a number', () => {
      const invalidInput = {
        body: {
          email: 'joao.santocristo@gmail.com',
          password: 12345,
        },
        params: {
          id: '95a7d95d-62f4-40b3-b76c-427bb4f56c3f',
        },
      };
      const schema = loginSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });
  });
});
