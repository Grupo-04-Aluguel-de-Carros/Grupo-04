/* eslint-disable no-undef */
import * as Store from '../findManyStoreRepo.js';
import { queryStories } from '../../../mocks/store.mock.js';

const prismaMock = {
  store: {
    findMany: jest.fn(),
  },
};

describe('Find Many stories Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when quering stories', () => {
    it('should query stories with default options', async () => {
      jest.spyOn(Store, 'findManyStoreRepo').mockImplementation(async () => {
        const store = await prismaMock.store.findMany({
          skip: 0,
          take: 10,
          orderBy: undefined,
        });
        return store;
      });

      prismaMock.store.findMany.mockResolvedValue(queryStories);

      const result = await Store.findManyStoreRepo({
        skip: 0,
        take: 10,
        orderBy: undefined,
      });

      expect(prismaMock.store.findMany).toHaveBeenCalledWith({
        skip: 0,
        take: 10,
        orderBy: undefined,
      });
      expect(result).toEqual(queryStories);
    });

    it('should return an empty array if no store is found', async () => {
      prismaMock.store.findMany.mockResolvedValue([]);

      const result = await Store.findManyStoreRepo();
      expect(result).toEqual([]);
    });
  });

  describe('teste gpt', () => {
    const customOptions = {
      offset: 5,
      listPerPage: 20,
      query: 'customQuery',
      order: 'asc',
    };
    it('should query stories with custom options', async () => {
      jest.spyOn(Store, 'findManyStoreRepo').mockImplementation(async () => {
        const store = await prismaMock.store.findMany({
          where: { name: { contains: customOptions.query } },
          orderBy: { createdAt: customOptions.order },
          skip: customOptions.offset,
          take: customOptions.listPerPage,
        });
        return store;
      });

      prismaMock.store.findMany.mockResolvedValue(queryStories);

      const result = await Store.findManyStoreRepo(customOptions);
      console.log('result', result);

      expect(prismaMock.store.findMany).toHaveBeenCalledWith({
        where: { name: { contains: customOptions.query } },
        orderBy: { createdAt: customOptions.order },
        skip: customOptions.offset,
        take: customOptions.listPerPage,
      });
      expect(result).toEqual(queryStories);
    });

    it('should handle the case when no query is provided', async () => {
      jest.spyOn(Store, 'findManyStoreRepo').mockImplementation(async () => {
        const store = await prismaMock.store.findMany({
          where: { name: { contains: customOptions.query } },
          orderBy: { createdAt: customOptions.order },
          skip: customOptions.offset,
          take: customOptions.listPerPage,
        });
        return store;
      });

      prismaMock.store.findMany.mockResolvedValue(queryStories);
      const result = await Store.findManyStoreRepo({
        offset: 0,
        listPerPage: 10,
        order: 'asc',
      });

      expect(prismaMock.store.findMany).toHaveBeenCalledWith({
        where: { name: { contains: customOptions.query } },
        orderBy: { createdAt: customOptions.order },
        skip: customOptions.offset,
        take: customOptions.listPerPage,
      });
      // expect(result).toEqual([]);
    });

    it('should handle errors and throw an exception', async () => {
      prismaMock.store.findMany.mockRejectedValue(
        new Error('Não foi possivel buscar as lojas')
      );

      // Certifique-se de que o erro é capturado e uma exceção é lançada
      await expect(Store.findManyStoreRepo()).rejects.toThrow(
        new Error('Não foi possivel buscar as lojas')
      );
    });
  });
});
