import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const addBrandToStoreRepo = async (id, updateBody) => {
  try {
    return await db.store.update({
      where: { id },
      data: updateBody,
    });
  } catch (error) {
    throw {
      message: 'Não foi possivel atualizar a loja com as marcas',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
