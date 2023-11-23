/* eslint-disable no-undef */
import * as User from '../createUserRepo.js';
import { HttpStatusCode } from 'axios';

const prismaMock = {
  user: {
    create: jest.fn(),
  },
};

describe('Create User Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when creating a user', () => {
    it('should create a user successfully', async () => {
      const userData = {
        name: 'John',
        surname: 'Doe',
        email: 'john.doe@example.com',
        cpf: '123.456.789-00',
        phoneNumber: '123456789',
        age: 25,
        password: 'securepassword',
      };

      const createUserResult = {
        id: 'user-id',
        name: userData.name,
        surname: userData.surname,
        email: userData.email,
        cpf: userData.cpf,
        phoneNumber: userData.phoneNumber,
        age: userData.age,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      prismaMock.user.create.mockResolvedValue(createUserResult);

      const result = await User.createUserRepo(
        userData.name,
        userData.surname,
        userData.email,
        userData.cpf,
        userData.phoneNumber,
        userData.age,
        userData.password,
        prismaMock
      );

      expect(prismaMock.user.create).toHaveBeenCalledWith({
        data: {
          name: userData.name,
          surname: userData.surname,
          email: userData.email,
          cpf: userData.cpf,
          phoneNumber: userData.phoneNumber,
          age: userData.age,
          password: userData.password,
        },
        select: {
          id: true,
          name: true,
          surname: true,
          email: true,
          cpf: true,
          phoneNumber: true,
          age: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      expect(result).toEqual(createUserResult);
    });

    it('should handle errors and throw an exception', async () => {
      const errorMessage = 'Não foi possível criar o usuário.';
      const error = {
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      };

      prismaMock.user.create.mockRejectedValue(error);

      try {
        await User.createUserRepo(
          'John',
          'Doe',
          'john.doe@example.com',
          '123.456.789-00',
          '123456789',
          25,
          'securepassword',
          prismaMock
        );
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: errorMessage,
          status: HttpStatusCode.InternalServerError,
        });
      }
    });

    it('should handle errors and throw an exception if Prisma rejects without a specific error', async () => {
      const errorMessage = 'Não foi possível criar o usuário.';
      const error = {
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      };

      prismaMock.user.create.mockRejectedValue(error);

      try {
        await User.createUserRepo(
          'John',
          'Doe',
          'john.doe@example.com',
          '123.456.789-00',
          '123456789',
          25,
          'securepassword',
          prismaMock
        );
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: 'Não foi possível criar o usuário.',
          status: HttpStatusCode.InternalServerError,
        });
      }
    });
  });
});
