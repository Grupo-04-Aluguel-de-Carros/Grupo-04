import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findStoreByIdRepo = id => {
  try {
    return db.store.findUnique({ where: { id } });
  } catch (error) {
    throw new Error(
      'Não foi possivel achar a loja pelo id',
      HttpStatusCode.NotFound
    );
  }
};
