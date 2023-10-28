import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findUserByEmailRepo = async email => {
  try {
    return await db.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        cpf: true,
        phoneNumber: true,
        age: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    throw new Error(
      'Não foi possível buscar o usuário pelo email.',
      HttpStatusCode.BadRequest
    );
  }
};
