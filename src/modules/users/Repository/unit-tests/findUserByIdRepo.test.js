/* eslint-disable no-undef */
import * as User from '../findUserByIdRepo.js';
import { HttpStatusCode } from 'axios';

const prismaMock = {
  user: {
    findUnique: jest.fn(),
  },
};

describe('Find User By ID Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when finding a user by ID', () => {
    it('should find a user successfully', async () => {
      const userId = 'user-id';
      const userResult = {
        id: userId,
        name: 'John',
        surname: 'Doe',
        email: 'john.doe@example.com',
        cpf: '12345678901',
        phoneNumber: '123456789',
        age: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        Address: { cep: '12345-678', state: 'CA', city: 'Los Angeles' },
      };

      prismaMock.user.findUnique.mockResolvedValue(userResult);

      const result = await User.findUserByIdRepo(userId, prismaMock);

      expect(prismaMock.user.findUnique).toHaveBeenCalledWith({
        where: { id: userId },
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
          Address: { select: { cep: true, state: true, city: true } },
        },
      });
      expect(result).toEqual(userResult);
    });

    it('should handle errors and throw an exception', async () => {
      const userId = 'user-id';
      const errorMessage = 'Não foi possível buscar o usuário pelo id.';
      const error = new Error(errorMessage);

      prismaMock.user.findUnique.mockRejectedValue(error);

      try {
        await User.findUserByIdRepo(userId, prismaMock);
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: errorMessage,
          status: HttpStatusCode.InternalServerError,
        });
      }
    });
  });
});
