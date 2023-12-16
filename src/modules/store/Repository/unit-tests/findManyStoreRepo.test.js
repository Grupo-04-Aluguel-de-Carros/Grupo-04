/* eslint-disable no-undef */
// findManyStoreRepo.test.js
import * as Store from '../findManyStoreRepo.js';
import { HttpStatusCode } from 'axios';

const prismaMock = {
  store: {
    findMany: jest.fn(),
  },
};

describe('Find Many stories Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when querying stores', () => {
    it('should query stores with default options', async () => {
      prismaMock.store.findMany.mockResolvedValue([]);

      const result = await Store.findManyStoreRepo(
        {
          offset: 0,
          listPerPage: 10,
          query: undefined,
          order: 'desc',
        },
        prismaMock
      );

      expect(prismaMock.store.findMany).toHaveBeenCalledWith({
        where: { name: { contains: undefined } },
        orderBy: { createdAt: 'desc' },
        skip: 0,
        take: 10,
      });
      expect(result).toEqual([]);
    });

    it('should handle errors and throw an exception', async () => {
      prismaMock.store.findMany.mockRejectedValue(
        new Error(
          'Não foi possível buscar as lojas',
          HttpStatusCode.InternalServerError
        )
      );

      await expect(
        Store.findManyStoreRepo(
          {
            offset: 0,
            listPerPage: 10,
            query: undefined,
            order: 'desc',
          },
          prismaMock
        )
      ).rejects.toThrow(
        new Error(
          'Não foi possível buscar as lojas',
          HttpStatusCode.InternalServerError
        )
      );
    });

    it('should handle errors and throw a default exception if status is not provided', async () => {
      const errorMessage = 'An unexpected error occurred.';
      const error = new Error(errorMessage);
      prismaMock.store.findMany.mockRejectedValue(error);

      await expect(
        Store.findManyStoreRepo(
          {
            offset: 0,
            listPerPage: 10,
            query: undefined,
            order: 'desc',
          },
          prismaMock
        )
      ).rejects.toThrowError({
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      });
    });
  });
});
