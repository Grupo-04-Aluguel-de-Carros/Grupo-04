/* eslint-disable no-undef */
import { HttpStatusCode } from 'axios';
import * as CarRepo from '../findCarByIdRepo.js';

const prismaMock = {
  car: {
    findUnique: jest.fn(),
  },
};

describe('Find Car By ID Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when finding a car by ID', () => {
    it('should find a car successfully', async () => {
      const carId = 'car-id';

      const carData = {
        id: carId,
        name: 'Car 1',
        color: 'Red',
        Brand: { id: 'brand-id', name: 'Brand 1' },
        Store: { id: 'store-id', name: 'Store 1' },
      };

      prismaMock.car.findUnique.mockResolvedValue(carData);

      const result = await CarRepo.findCarByIdRepo(carId, prismaMock);

      expect(prismaMock.car.findUnique).toHaveBeenCalledWith({
        where: { id: carId },
        select: {
          id: true,
          name: true,
          color: true,
          Brand: { select: { id: true, name: true } },
          Store: { select: { id: true, name: true } },
        },
      });

      expect(result).toEqual(carData);
    });

    it('should handle errors and throw an exception', async () => {
      const carId = 'non-existent-car-id';
      const errorMessage = 'Não foi possível buscar o carro pelo id.';
      const error = {
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      };

      prismaMock.car.findUnique.mockRejectedValue(error);

      try {
        await CarRepo.findCarByIdRepo(carId, prismaMock);
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: errorMessage,
          status: HttpStatusCode.InternalServerError,
        });
      }
    });

    it('should handle errors and throw an exception if Prisma rejects without a specific error', async () => {
      const carId = 'non-existent-car-id';
      const errorMessage = 'Não foi possível buscar o carro pelo id.';
      const error = {
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      };

      prismaMock.car.findUnique.mockRejectedValue(error);

      try {
        await CarRepo.findCarByIdRepo(carId, prismaMock);
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: 'Não foi possível buscar o carro pelo id.',
          status: HttpStatusCode.InternalServerError,
        });
      }
    });
  });
});
