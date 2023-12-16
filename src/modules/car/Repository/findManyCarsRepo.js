import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findManyCarsRepo = async (
  { offset, listPerPage, query, order },
  dbClient = db
) => {
  try {
    let whereCondition = {};

    if (query) {
      whereCondition = {
        OR: [
          {
            model: { contains: query },
          },
          {
            color: { contains: query },
          },
        ],
      };
    }
    return await dbClient.car.findMany({
      where: whereCondition,
      orderBy: {
        createdAt: order ? order : 'desc',
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
      skip: offset,
      take: listPerPage,
    });
  } catch (error) {
    throw {
      message: 'Não foi possível buscar a lista de carros.',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
