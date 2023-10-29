import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const deleteUserRepo = async id => {
  try {
    return await db.user.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error(
      'Não foi possível deletetar o usuário.',
      HttpStatusCode.BadRequest
    );
  }
};
