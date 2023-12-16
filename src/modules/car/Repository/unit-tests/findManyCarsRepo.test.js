/* eslint-disable no-undef */
import { HttpStatusCode } from 'axios';
import * as CarRepo from '../findManyCarsRepo.js';

const prismaMock = {
  car: {
    findMany: jest.fn(),
  },
};

describe('Find Many Cars Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when finding many cars', () => {
    it('should find many cars successfully', async () => {
      const queryParameters = {
        offset: 0,
        listPerPage: 10,
        query: 'SearchQuery',
        order: 'asc',
      };

      const carsData = [
        // Mock car data
        // ...
      ];

      prismaMock.car.findMany.mockResolvedValue(carsData);

      const result = await CarRepo.findManyCarsRepo(
        queryParameters,
        prismaMock
      );

      expect(prismaMock.car.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            {
              model: { contains: queryParameters.query },
            },
            {
              color: { contains: queryParameters.query },
            },
          ],
        },
        orderBy: {
          createdAt: queryParameters.order ? queryParameters.order : 'desc',
        },
        select: {
          id: true,
          available: true,
          color: true,
          name: true,
          model: true,
          value: true,
          year: true,
          description: true,
          Store: { select: { id: true, name: true } },
        },
        skip: queryParameters.offset,
        take: queryParameters.listPerPage,
      });

      expect(result).toEqual(carsData);
    });

    it('should handle errors and throw an exception', async () => {
      const queryParameters = {
        offset: 0,
        listPerPage: 10,
        query: 'SearchQuery',
        order: 'asc',
      };

      const errorMessage = 'Não foi possível buscar a lista de carros.';
      const error = {
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      };

      prismaMock.car.findMany.mockRejectedValue(error);

      try {
        await CarRepo.findManyCarsRepo(queryParameters, prismaMock);
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: errorMessage,
          status: HttpStatusCode.InternalServerError,
        });
      }
    });

    it('should handle errors and throw an exception if Prisma rejects without a specific error', async () => {
      const queryParameters = {
        offset: 0,
        listPerPage: 10,
        query: 'SearchQuery',
        order: 'asc',
      };

      const errorMessage = 'Não foi possível buscar a lista de carros.';
      const error = {
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      };

      prismaMock.car.findMany.mockRejectedValue(error);

      try {
        await CarRepo.findManyCarsRepo(queryParameters, prismaMock);
        fail('Expected an exception to be thrown');
      } catch (thrownObject) {
        expect(thrownObject).toEqual({
          message: 'Não foi possível buscar a lista de carros.',
          status: HttpStatusCode.InternalServerError,
        });
      }
    });
  });
});
