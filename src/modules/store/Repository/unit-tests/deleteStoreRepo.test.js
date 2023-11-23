/* eslint-disable no-undef */
import * as Store from '../deleteStoreRepo.js';
import { HttpStatusCode } from 'axios';

const prismaMock = {
  store: {
    delete: jest.fn(),
  },
};

describe('Delete Store Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when deleting a store', () => {
    it('should delete a store successfully', async () => {
      const id = 'store-id';
      const deleteResult = {
        id,
        name: 'deleted-store',
      };

      prismaMock.store.delete.mockResolvedValue(deleteResult);

      const result = await Store.deleteStoreRepo(id, prismaMock);

      expect(prismaMock.store.delete).toHaveBeenCalledWith({
        where: { id },
      });
      expect(result).toEqual(deleteResult);
    });

    it('should handle errors and throw an exception', async () => {
      const id = 'store-id';
      const errorMessage = 'Não foi possível deletar a loja';
      const error = new Error(errorMessage);

      prismaMock.store.delete.mockRejectedValue(error);

      try {
        await Store.deleteStoreRepo(id, prismaMock);
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
