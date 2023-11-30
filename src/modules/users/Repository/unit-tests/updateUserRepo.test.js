/* eslint-disable no-undef */
import * as User from '../updateUserRepo.js';
import { HttpStatusCode } from 'axios';

const prismaMock = {
  user: {
    update: jest.fn(),
  },
};

describe('Update User Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when updating a user', () => {
    it('should update a user successfully', async () => {
      const id = 'user-id';
      const updateBody = {
        name: 'new-name',
        email: 'new-email@example.com',
      };
      const updateResult = {
        id,
        name: updateBody.name,
        surname: 'surname',
        email: updateBody.email,
        cpf: '12345678901',
        phoneNumber: '123456789',
        age: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      prismaMock.user.update.mockResolvedValue(updateResult);

      const result = await User.updateUserRepo(id, updateBody, prismaMock);

      expect(prismaMock.user.update).toHaveBeenCalledWith({
        data: updateBody,
        where: { id },
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

      expect(result).toEqual(updateResult);
    });

    it('should handle errors and throw an exception', async () => {
      const id = 'user-id';
      const updateBody = {
        name: 'new-name',
        email: 'new-email@example.com',
      };
      const errorMessage = 'Não foi possível fazer o update do usuário.';
      const error = new Error(errorMessage);

      prismaMock.user.update.mockRejectedValue(error);

      try {
        await User.updateUserRepo(id, updateBody, prismaMock);
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: errorMessage,
          status: HttpStatusCode.InternalServerError,
        });
      }
    });

    it('should handle errors and throw a default exception if status is not provided', async () => {
      const id = 'user-id';
      const updateBody = {
        name: 'new-name',
        email: 'new-email@example.com',
      };
      const errorMessage = 'Não foi possível fazer o update do usuário.';
      const error = new Error(errorMessage);

      prismaMock.user.update.mockRejectedValue(error);

      try {
        await User.updateUserRepo(id, updateBody, prismaMock);
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: errorMessage,
          status: HttpStatusCode.InternalServerError,
        });
      }
    });

    it('should handle errors and throw a default exception if status is not provided (custom error)', async () => {
      const id = 'user-id';
      const updateBody = {
        name: 'new-name',
        email: 'new-email@example.com',
      };
      const errorMessage = 'Custom error message.';
      const error = new Error(errorMessage);

      prismaMock.user.update.mockRejectedValue(error);

      try {
        await User.updateUserRepo(id, updateBody, prismaMock);
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: 'Não foi possível fazer o update do usuário.',
          status: HttpStatusCode.InternalServerError,
        });
      }
    });
  });
});
