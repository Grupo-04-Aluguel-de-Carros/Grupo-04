/* eslint-disable no-undef */
import { HttpStatusCode } from 'axios';
import * as CarRepo from '../updateCarRepo.js';

const prismaMock = {
  car: {
    update: jest.fn(),
  },
};

describe('Update Car Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when updating a car', () => {
    it('should update a car successfully', async () => {
      const carId = 'valid-car-id';
      const updateBody = {
        color: 'Blue',
        model: 'Model Updated',
        value: 25000,
      };

      const updatedCarResult = {
        id: carId,
        color: updateBody.color,
        model: updateBody.model,
        value: updateBody.value,
        // ... other properties
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      prismaMock.car.update.mockResolvedValue(updatedCarResult);

      const result = await CarRepo.updateCarRepo(carId, updateBody, prismaMock);

      expect(prismaMock.car.update).toHaveBeenCalledWith({
        data: updateBody,
        where: { id: carId },
      });

      expect(result).toEqual(updatedCarResult);
    });

    it('should handle errors and throw an exception', async () => {
      const carId = 'valid-car-id';
      const updateBody = {
        color: 'Blue',
        model: 'Model Updated',
        value: 25000,
      };

      const errorMessage = 'Não foi possível atualizar o carro.';
      const error = {
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      };

      prismaMock.car.update.mockRejectedValue(error);

      try {
        await CarRepo.updateCarRepo(carId, updateBody, prismaMock);
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: errorMessage,
          status: HttpStatusCode.InternalServerError,
        });
      }
    });

    it('should handle errors and throw an exception for invalid car ID', async () => {
      const invalidCarId = 'invalid-car-id';
      const updateBody = {
        color: 'Blue',
        model: 'Model Updated',
        value: 25000,
      };

      const errorMessage = 'Não foi possível atualizar o carro.';
      const error = {
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      };

      prismaMock.car.update.mockRejectedValue(error);

      try {
        await CarRepo.updateCarRepo(invalidCarId, updateBody, prismaMock);
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: errorMessage,
          status: HttpStatusCode.InternalServerError,
        });
      }
    });

    it('should handle errors and throw an exception for invalid update body', async () => {
      const carId = 'valid-car-id';
      const invalidUpdateBody = {
        // Invalid update body without required properties
      };

      const errorMessage = 'Não foi possível atualizar o carro.';
      const error = {
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      };

      prismaMock.car.update.mockRejectedValue(error);

      try {
        await CarRepo.updateCarRepo(carId, invalidUpdateBody, prismaMock);
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
