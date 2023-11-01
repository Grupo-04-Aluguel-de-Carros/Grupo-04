import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const deleteStoreRepo = async id => {
  try {
    return await db.store.delete({
      where: { id },
    });
  } catch (error) {
    throw {
      message: 'Não foi possivel deletar a loja',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
