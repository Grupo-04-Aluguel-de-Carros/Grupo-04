import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findManyStoreRepo = () => {
  try {
    return db.store.findMany();
  } catch (error) {
    throw {
      message: 'Não foi possivel buscar aa lojas',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
