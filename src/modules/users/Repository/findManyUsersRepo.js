import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findManyUsersRepo = async () => {
  try {
    return await db.user.findMany({
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
    });
  } catch (error) {
    throw {
      message: 'Não foi possível procurar os usuários.',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
