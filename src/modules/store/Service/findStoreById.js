import { HttpStatusCode } from 'axios';
import { findStoreByIdRepo } from '../Repository/index.js';

export const findStoreById = async id => {
  try {
    const existsStore = await findStoreByIdRepo(id);
    if (!existsStore) {
      throw {
        message: 'Não foi possivel encontrar a loja pelo id',
        status: HttpStatusCode.NotFound,
      };
    }
    return existsStore;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
