import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const updateStoreRepo = async (id, updateBody) => {
  try {
    return await db.store.update({ data: { name: updateBody }, where: { id } });
  } catch (error) {
    throw {
      message: 'Não foi possivel atualizar a loja',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
