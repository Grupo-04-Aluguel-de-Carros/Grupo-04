import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const updateUserRepo = async (id, updateBody, dbClient = db) => {
  try {
    return await dbClient.user.update({
      data: updateBody,
      where: { id },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        cpf: true,
        phoneNumber: true,
        age: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    throw {
      message: 'Não foi possível fazer o update do usuário.',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
