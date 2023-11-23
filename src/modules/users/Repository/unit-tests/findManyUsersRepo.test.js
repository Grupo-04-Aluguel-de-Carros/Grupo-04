/* eslint-disable no-undef */
import * as User from '../findManyUsersRepo.js';
import { HttpStatusCode } from 'axios';

const prismaMock = {
  user: {
    findMany: jest.fn(),
  },
};

describe('Find Many Users Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when querying users', () => {
    it('should query users with default options', async () => {
      prismaMock.user.findMany.mockResolvedValue([]);

      const result = await User.findManyUsersRepo(
        {
          offset: 0,
          listPerPage: 10,
          query: undefined,
          order: 'desc',
        },
        prismaMock
      );

      expect(prismaMock.user.findMany).toHaveBeenCalledWith({
        where: {},
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          name: true,
          surname: true,
          email: true,
          cpf: true,
          phoneNumber: true,
          age: true,
          createdAt: true,
          updatedAt: true,
        },
        skip: 0,
        take: 10,
      });
      expect(result).toEqual([]);
    });

    it('should query users with custom options', async () => {
      const queryOptions = {
        offset: 5,
        listPerPage: 20,
        query: 'john.doe@example.com',
        order: 'asc',
      };

      const userResult = [
        {
          id: 'user-id-1',
          name: 'John',
          surname: 'Doe',
          email: 'john.doe@example.com',
          cpf: '12345678901',
          phoneNumber: '123456789',
          age: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      prismaMock.user.findMany.mockResolvedValue(userResult);

      const result = await User.findManyUsersRepo(queryOptions, prismaMock);

      expect(prismaMock.user.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            {
              email: { contains: queryOptions.query },
            },
            {
              cpf: { contains: queryOptions.query },
            },
          ],
        },
        orderBy: { createdAt: 'asc' },
        select: {
          id: true,
          name: true,
          surname: true,
          email: true,
          cpf: true,
          phoneNumber: true,
          age: true,
          createdAt: true,
          updatedAt: true,
        },
        skip: queryOptions.offset,
        take: queryOptions.listPerPage,
      });

      expect(result).toEqual(userResult);
    });

    it('should return an empty array if no users are found', async () => {
      const queryOptions = {
        offset: 0,
        listPerPage: 10,
        query: 'nonexistentuser@example.com',
        order: 'desc',
      };

      prismaMock.user.findMany.mockResolvedValue([]);

      const result = await User.findManyUsersRepo(queryOptions, prismaMock);

      expect(result).toEqual([]);
    });

    it('should handle errors and throw an exception', async () => {
      const queryOptions = {
        offset: 0,
        listPerPage: 10,
        query: undefined,
        order: 'desc',
      };

      const errorMessage = 'Não foi possível procurar os usuários.';
      const error = new Error(errorMessage);
      error.status = HttpStatusCode.InternalServerError;

      // Configurando a função mock para rejeitar a promessa com o erro personalizado
      prismaMock.user.findMany.mockRejectedValue(error);

      // Agora, esperamos que a função lançará uma exceção com a estrutura desejada
      await expect(
        User.findManyUsersRepo(queryOptions, prismaMock)
      ).rejects.toMatchObject({
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      });
    });

    it('should handle errors and throw a default exception if status is not provided', async () => {
      const queryOptions = {
        offset: 0,
        listPerPage: 10,
        query: undefined,
        order: 'desc',
      };

      const errorMessage = 'Não foi possível procurar os usuários.';
      const error = new Error(errorMessage);

      // Configurando a função mock para rejeitar a promessa com o erro padrão
      prismaMock.user.findMany.mockRejectedValue(error);

      // Agora, esperamos que a função lançará uma exceção com a estrutura desejada
      await expect(
        User.findManyUsersRepo(queryOptions, prismaMock)
      ).rejects.toMatchObject({
        message: errorMessage,
        status: HttpStatusCode.InternalServerError,
      });
    });

    it('should handle errors and throw a default exception if status is not provided', async () => {
      const errorMessage = 'An unexpected error occurred.';
      const error = new Error(errorMessage);

      prismaMock.user.findMany.mockRejectedValue(error);

      try {
        await User.findManyUsersRepo(
          {
            offset: 0,
            listPerPage: 10,
            query: undefined,
            order: 'desc',
          },
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
  });
});
