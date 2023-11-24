/* eslint-disable no-undef */
import { HttpStatusCode } from 'axios';
import * as CarRepo from '../createCarRepo.js';

const prismaMock = {
  car: {
    create: jest.fn(),
  },
};

describe('Create Car Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when creating a car', () => {
    it('should create a car successfully', async () => {
      const carData = {
        name: 'Car 1',
        color: 'Red',
        storeId: 1, // Mock store id
        brandId: 1, // Mock brand id
        available: true,
        model: 'Model 1',
        value: 20000,
        year: 2022,
        description: 'Description for Car 1',
      };

      const createCarResult = {
        id: 'car-id',
        name: carData.name,
        color: carData.color,
        storeId: carData.storeId,
        brandId: carData.brandId,
        available: carData.available,
        model: carData.model,
        value: carData.value,
        year: carData.year,
        description: carData.description,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      prismaMock.car.create.mockResolvedValue(createCarResult);

      const result = await CarRepo.createCarRepo(
        carData.name,
        carData.color,
        carData.storeId,
        carData.brandId,
        carData.available,
        carData.model,
        carData.value,
        carData.year,
        carData.description,
        prismaMock
      );

      expect(prismaMock.car.create).toHaveBeenCalledWith({
        data: {
          name: carData.name,
          color: carData.color,
          available: carData.available,
          model: carData.model,
          value: carData.value,
          year: carData.year,
          description: carData.description,
          Brand: { connect: { id: carData.brandId } },
          Store: { connect: { id: carData.storeId } },
        },
      });
      expect(result).toEqual(createCarResult);
    });

    it('should handle errors and throw an exception', async () => {
      const errorMessage = 'Não foi possível criar o carro.';
      const error = {
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      };

      prismaMock.car.create.mockRejectedValue(error);

      try {
        await CarRepo.createCarRepo(
          'Car 1',
          'Red',
          1,
          1,
          true,
          'Model 1',
          20000,
          2022,
          'Description for Car 1',
          prismaMock
        );
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: errorMessage,
          status: HttpStatusCode.InternalServerError,
        });
      }
    });

    it('should handle errors and throw an exception if Prisma rejects without a specific error', async () => {
      const errorMessage = 'Não foi possível criar o carro.';
      const error = {
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      };

      prismaMock.car.create.mockRejectedValue(error);

      try {
        await CarRepo.createCarRepo(
          'Car 1',
          'Red',
          1, // Mock store id
          1, // Mock brand id
          true,
          'Model 1',
          20000,
          2022,
          'Description for Car 1',
          prismaMock
        );
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: 'Não foi possível criar o carro.',
          status: HttpStatusCode.InternalServerError,
        });
      }
    });
  });
});
