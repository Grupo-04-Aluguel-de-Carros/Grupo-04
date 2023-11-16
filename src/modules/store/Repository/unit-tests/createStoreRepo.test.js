/* eslint-disable no-undef */
import * as Store from '../createStoreRepo.js';
import { createDataMock } from '../../../mocks/store.mock.js';

const prismaMock = {
  store: {
    create: jest.fn(),
  },
};

describe('Create Store Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when creating a new store', () => {
    it('should return the store with correct properties', async () => {
      jest.spyOn(Store, 'createStoreRepo').mockImplementation(async () => {
        const store = await prismaMock.store.create({
          data: createDataMock,
        });
        return store;
      });
      prismaMock.store.create.mockResolvedValue(createDataMock);
      const result = await Store.createStoreRepo(createDataMock);

      expect(prismaMock.store.create).toHaveBeenCalledWith({
        data: createDataMock,
      });
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('createdAt');
      expect(result).toHaveProperty('updatedAt');
      expect(result).toEqual(createDataMock);
    });

    it('should return an error if create request fails', async () => {
      prismaMock.store.create.mockRejectedValue(
        new Error('Não foi possivel criar a loja')
      );

      await expect(Store.createStoreRepo(createDataMock)).rejects.toThrow(
        'Não foi possivel criar a loja'
      );
    });
  });
});
