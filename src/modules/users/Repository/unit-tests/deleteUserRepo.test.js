/* eslint-disable no-undef */
import * as User from '../deleteUserRepo.js';
import { HttpStatusCode } from 'axios';

const prismaMock = {
  user: {
    delete: jest.fn(),
  },
};

describe('Delete User Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when deleting a user', () => {
    it('should delete a user successfully', async () => {
      const id = 'user-id';
      const deleteResult = {
        id,
        name: 'John',
        surname: 'Doe',
        email: 'john.doe@example.com',
        cpf: '12345678901',
        phoneNumber: '123456789',
        age: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      prismaMock.user.delete.mockResolvedValue(deleteResult);

      const result = await User.deleteUserRepo(id, prismaMock);

      expect(prismaMock.user.delete).toHaveBeenCalledWith({
        where: { id },
      });
      expect(result).toEqual(deleteResult);
    });

    it('should handle errors and throw an exception', async () => {
      const id = 'user-id';
      const errorMessage = 'Não foi possível deletar o usuário.';
      const error = new Error(errorMessage);
      error.status = HttpStatusCode.InternalServerError;

      prismaMock.user.delete.mockRejectedValue(error);

      try {
        await User.deleteUserRepo(id, prismaMock);
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
