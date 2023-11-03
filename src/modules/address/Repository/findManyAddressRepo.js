import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findManyAddressRepo = async ({
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
            city: { contains: query },
          },
          {
            state: { contains: query },
          },
        ],
      };
    }
    return await db.address.findMany({
      where: whereCondition,
      orderBy: {
        createdAt: order ? order : 'desc',
      },
      skip: offset,
      take: listPerPage,
    });
  } catch (error) {
    throw {
      message: 'Não foi possivel buscar os endereços',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
