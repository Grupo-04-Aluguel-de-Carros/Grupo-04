import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const deleteUserRepo = async (id, dbClient = db) => {
  try {
    return await dbClient.user.delete({
      where: { id },
    });
  } catch (error) {
    throw {
      message: 'Não foi possível deletar o usuário.',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
