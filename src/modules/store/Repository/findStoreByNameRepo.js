import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findStoreByNameRepo = async name => {
  try {
    return await db.store.findFirst({ where: { name } });
  } catch (error) {
    throw {
      message: 'Não foi possivel buscar a loja pelo nome',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
