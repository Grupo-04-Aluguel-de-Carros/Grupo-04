import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findManyUsersRepo = async ({
  offset,
  listPerPage,
  query,
  order,
}) => {
  try {
    return await db.user.findMany({
      where: {
        OR: [
          {
            email: { contains: query },
          },
          {
            cpf: { contains: query },
          },
        ],
      },
      orderBy: {
        createdAt: order ? order : 'desc',
      },
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
      skip: offset,
      take: listPerPage,
    });
  } catch (error) {
    throw {
      message: 'Não foi possível procurar os usuários.',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
