import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const deleteStoreRepo = async (id, dbClient = db) => {
  try {
    return await dbClient.store.delete({
      where: { id },
    });
  } catch (error) {
    throw {
      message: 'Não foi possível deletar a loja',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
