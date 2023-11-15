/* eslint-disable no-undef */
import { registerUserSchema } from '../registerUserSchema.js';

describe('register user schema', () => {
  describe('when a valid body', () => {
    it('should validates a body with all fields', () => {
      const validInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(validInput);

      expect(schema.success).toBe(true);
    });

    it('should validates a body with all fields', () => {
      const validInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '21246974045',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(validInput);

      expect(schema.success).toBe(true);
    });

    it('should validates a body with all fields', () => {
      const validInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '21246974045',
          phoneNumber: '(11)94395-6693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(validInput);

      expect(schema.success).toBe(true);
    });
  });

  describe('when an invalid body', () => {
    it('should return an error for a body where "name" is an empty string', () => {
      const invalidInput = {
        body: {
          name: '',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O nome deve ter ao menos 2 digitos'
        );
      }
    });

    it('should return an error for a body without "name"', () => {
      const invalidInput = {
        body: {
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo obrigatório');
      }
    });

    it('should return an error for a body with 1 caracter in "name"', () => {
      const invalidInput = {
        body: {
          name: 'a',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O nome deve ter ao menos 2 digitos'
        );
      }
    });

    it('should return an error for a body where "name" is not a string', () => {
      const invalidInput = {
        body: {
          name: 1,
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
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
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
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
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O nome deve ter ao menos 2 digitos'
        );
      }
    });

    it('should return an error for a body where "name" is not a valid string', () => {
      const invalidInput = {
        body: {
          name: '12345',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Apenas letras são aceitas'
        );
      }
    });

    it('should return an error for a body where "surname" is an empty string', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: '',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O sobrenome deve ter ao menos 2 digitos'
        );
      }
    });

    it('should return an error for a body without "surname"', () => {
      const invalidInput = {
        body: {
          name: 'João',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo obrigatório');
      }
    });

    it('should return an error for a body with 1 caracter in "surname"', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'a',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O sobrenome deve ter ao menos 2 digitos'
        );
      }
    });

    it('should return an error for a body where "surname" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 1,
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "surname" is not a string', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: ['Santo Cristo'],
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body where "surname" is not a valid string', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: '    ',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'O sobrenome deve ter ao menos 2 digitos'
        );
      }
    });

    it('should return an error for a body where "surname" is not a valid string', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: '1234',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Apenas letras são aceitas'
        );
      }
    });

    it('should return an error for a body without "email"', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo obrigatório');
      }
    });

    it('should return an error for a body where "email" is not a valid email', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Email inválido');
      }
    });

    it('should return an error for a body where "email" is not a valid email', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@mailcom',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Email inválido');
      }
    });

    it('should return an error for a body where "email" is not a valid email', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristomail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Email inválido');
      }
    });

    it('should return an error for a body where "email" is not a valid email', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: '',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Email inválido');
      }
    });

    it('should return an error for a body where "cpf" is an empty string', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Cpf inválido');
      }
    });

    it('should return an error for a body without "cpf"', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo obrigatório');
      }
    });

    it('should return an error for a body where "phoneNumber" is an empty string', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Telefone inválido');
      }
    });

    it('should return an error for a body without "phoneNumber"', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo obrigatório');
      }
    });

    it('should return an error for a body where "phoneNumber" is an invalid number (without ddd)', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '943956693',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Telefone inválido');
      }
    });

    it('should return an error for a body where "phoneNumber" is an invalid number (more numbers)', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '119439566931',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Telefone inválido');
      }
    });

    it('should return an error for a body where "phoneNumber" is an invalid number (only letters)', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: 'abcdeftasfa',
          age: '18',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Telefone inválido');
      }
    });

    it('should return an error for a body where "age" is an empty string', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Apenas números são aceitos'
        );
      }
    });

    it('should return an error for a body without "age"', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo obrigatório');
      }
    });

    it('should return an error for a body where "age" is a number', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: 1,
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });

    it('should return an error for a body where "age" is an array', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: [1],
          password: '12345678',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received array'
        );
      }
    });

    it('should return an error for a body where "password" is an empty string', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'A senha deve ter ao menos 6 digitos'
        );
      }
    });

    it('should return an error for a body without "password"', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual('Campo obrigatório');
      }
    });

    it('should return an error for a body where "password" has less than 6 digits', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: '12345',
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'A senha deve ter ao menos 6 digitos'
        );
      }
    });

    it('should return an error for a body where "password" is a number', () => {
      const invalidInput = {
        body: {
          name: 'João',
          surname: 'Santo Cristo',
          email: 'joao.santocristo@gmail.com',
          cpf: '212.469.740-45',
          phoneNumber: '11943956693',
          age: '18',
          password: 12345,
        },
      };
      const schema = registerUserSchema.safeParse(invalidInput);
      if (!schema.success) {
        expect(schema.error.issues[0].message).toEqual(
          'Expected string, received number'
        );
      }
    });
  });
});
