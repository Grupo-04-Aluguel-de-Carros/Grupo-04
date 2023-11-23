/* eslint-disable no-undef */
import * as Store from '../updateStoreRepo.js';
import { HttpStatusCode } from 'axios';

const prismaMock = {
  store: {
    update: jest.fn(),
  },
};

describe('Update Store Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when updating a store', () => {
    it('should update a store successfully', async () => {
      const id = 'store-id';
      const updateBody = 'new-name';
      const updateResult = {
        id,
        name: updateBody,
        Address: { id: 'address-id' },
        brands: [
          {
            brand: {
              id: 'brand-id',
              name: 'brand-name',
              Car: [{ name: 'car-name', model: 'car-model' }],
            },
          },
        ],
      };

      prismaMock.store.update.mockResolvedValue(updateResult);

      const result = await Store.updateStoreRepo(id, updateBody, prismaMock);

      expect(prismaMock.store.update).toHaveBeenCalledWith({
        data: { name: updateBody },
        where: { id },
        select: {
          id: true,
          name: true,
          Address: { select: { id: true } },
          brands: {
            select: {
              brand: {
                select: {
                  id: true,
                  name: true,
                  Car: {
                    select: { name: true, model: true },
                    where: { storeId: id },
                  },
                },
              },
            },
          },
        },
      });
      expect(result).toEqual(updateResult);
    });

    it('should handle errors and throw an exception', async () => {
      const id = 'store-id';
      const updateBody = 'new-name';
      const errorMessage = 'Não foi possível atualizar a loja';
      const error = new Error(errorMessage);

      prismaMock.store.update.mockRejectedValue(error);

      try {
        await Store.updateStoreRepo(id, { name: updateBody });
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
