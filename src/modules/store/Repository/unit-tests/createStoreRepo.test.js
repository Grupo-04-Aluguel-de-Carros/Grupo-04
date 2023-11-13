/* eslint-disable no-undef */
import { HttpStatusCode } from 'axios';
import * as repositories from '../index.js';

export const prismaMock = {
  store: {
    create: jest.fn(),
    findMany: jest.fn(),
    findById: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
  },
};

jest.mock('../../../../config/db.js');

// jest.describe('createStoreRepo', () => {
//   jest.it('shpuld validate resgister store', async () => {
//     const mockStore = {
//       id: '9c9691d5-5c34-4734-81df-a2c3f712203c',
//     };
//   });
// });

const mockStore = {
  id: 1,
  name: 'My Store',
  brands: [
    {
      brand: {
        name: 'Brand 1',
      },
    },
  ],
};
describe('createStoreRepo', () => {
  it('should create a new store successfully', async () => {
    prismaMock.store.create.mockResolvedValue(mockStore);

    const result = await repositories.createStoreRepo({
      name: 'My Store',
      brands: [1],
    });

    expect(result).toEqual(mockStore);
  });

  it('should throw an error if the store cannot be created', async () => {
    prismaMock.store.create.mockRejectedValue(
      new Error('Não foi possivel criar a loja')
    );

    try {
      await repositories.createStoreRepo({ name: 'My Store', brands: [1] });
    } catch (error) {
      expect(error).toEqual({
        message: 'Não foi possivel criar a loja',
        status: HttpStatusCode.InternalServerError,
      });
    }
  });
});
