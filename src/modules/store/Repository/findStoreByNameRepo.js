import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findStoreByNameRepo = async name => {
  try {
    return await db.store.findFirst({ where: { name } });
  } catch (error) {
    throw new Error(
      'Não foi possivel achar a loja pelo nome',
      HttpStatusCode.NotFound
    );
  }
};
