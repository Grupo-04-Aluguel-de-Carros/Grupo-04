import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findManyCarsRepo = async ({
  offset,
  listPerPage,
  query,
  order,
}) => {
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
    return await db.car.findMany({
      where: whereCondition,
      orderBy: {
        createdAt: order ? order : 'desc',
      },
      select: {
        id: true,
        available: true,
        color: true,
        imageUrl: true,
        name: true,
        model: true,
        value: true,
        year: true,
        description: true,
      },
      skip: offset,
      take: listPerPage,
    });
  } catch (error) {
    console.log('error', error);
    throw {
      message: 'Não foi possivel buscar a lista de carros',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
