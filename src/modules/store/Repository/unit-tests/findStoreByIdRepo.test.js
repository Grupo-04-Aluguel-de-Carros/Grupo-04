/* eslint-disable no-undef */
import * as Store from '../findStoreByIdRepo.js';
import { HttpStatusCode } from 'axios';

const dbMock = {
  store: {
    findUnique: jest.fn(),
  },
};

describe('Find by id story repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when get a store for id', () => {
    it('should get a store by id', async () => {
      dbMock.store.findUnique.mockResolvedValue({});

      const result = await Store.findStoreByIdRepo(
        '598641f1-1b95-45c0-a11a-37958de2b63c',
        dbMock
      );

      expect(result).toMatchObject({});

      expect(dbMock.store.findUnique).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: '598641f1-1b95-45c0-a11a-37958de2b63c' },
        })
      );
    });

    it('should handle error and throw custom exception', async () => {
      const customError = new Error('Custom error message');
      dbMock.store.findUnique.mockRejectedValue(customError);

      try {
        await Store.findStoreByIdRepo('some-id', dbMock);
      } catch (error) {
        expect(error).toEqual({
          message: 'Não foi possível buscar a loja pelo id',
          status: HttpStatusCode.InternalServerError,
        });
      }

      expect(dbMock.store.findUnique).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 'some-id' },
        })
      );
    });
  });
});
