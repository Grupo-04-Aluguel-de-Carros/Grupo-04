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
        const store = await prismaMock.store.findMany();
        return store;
      });

      prismaMock.store.findMany.mockResolvedValue(queryStories);

      const result = await Store.findManyStoreRepo();

      expect(result).toEqual(queryStories);
    });

    it('should return an empty array if no store is found', async () => {
      prismaMock.store.findMany.mockResolvedValue([]);

      const result = await Store.findManyStoreRepo();
      expect(result).toEqual([]);
    });
  });
});
