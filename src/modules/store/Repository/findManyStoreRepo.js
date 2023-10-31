import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findManyStoreRepo = () => {
  try {
    return db.store.findMany();
  } catch (error) {
    throw new Error(
      'Não foi possivel buscar as lojas',
      HttpStatusCode.BadRequest
    );
  }
};
