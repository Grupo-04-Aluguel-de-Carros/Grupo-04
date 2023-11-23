/* eslint-disable no-undef */
import * as Store from '../createStoreRepo.js';
import { HttpStatusCode } from 'axios';
import { createDataMock } from '../../../mocks/store.mock.js';

const dbMock = {
  store: {
    create: jest.fn(),
  },
};

describe('Create store repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when creating a store', () => {
    it('should create a store successfully', async () => {
      dbMock.store.create.mockResolvedValue(createDataMock);

      const result = await Store.createStoreRepo(createDataMock, dbMock);

      expect(result).toEqual(createDataMock);
      expect(dbMock.store.create).toHaveBeenCalledWith({
        data: { name: 'teste' },
        select: { createdAt: true, id: true, name: true, updatedAt: true },
      });
    });

    it('should handle error and throw custom exception', async () => {
      const customError = new Error('Custom error message');

      dbMock.store.create.mockRejectedValue(customError);

      try {
        await Store.createStoreRepo(createDataMock.name, dbMock);
      } catch (error) {
        expect(error).toEqual({
          message: 'Não foi possivel criar a loja',
          status: HttpStatusCode.InternalServerError,
        });
      }
    });
  });
});
