/* eslint-disable no-undef */
import { HttpStatusCode } from 'axios';
import * as CarRepo from '../deleteCarRepo.js';

const prismaMock = {
  car: {
    delete: jest.fn(),
  },
};

describe('Delete Car Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when deleting a car', () => {
    it('should delete a car successfully', async () => {
      const carId = 'valid-car-id';

      prismaMock.car.delete.mockResolvedValue({ id: carId });

      const result = await CarRepo.deleteCarRepo(carId, prismaMock);

      expect(prismaMock.car.delete).toHaveBeenCalledWith({
        where: { id: carId },
      });
      expect(result).toEqual({ id: carId });
    });

    it('should handle errors and throw an exception', async () => {
      const carId = 'valid-car-id';

      const errorMessage = 'Não foi possível excluir o carro.';
      const error = {
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      };

      prismaMock.car.delete.mockRejectedValue(error);

      try {
        await CarRepo.deleteCarRepo(carId, prismaMock);
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

      const errorMessage = 'Não foi possível excluir o carro.';
      const error = {
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      };

      prismaMock.car.delete.mockRejectedValue(error);

      try {
        await CarRepo.deleteCarRepo(invalidCarId, prismaMock);
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
