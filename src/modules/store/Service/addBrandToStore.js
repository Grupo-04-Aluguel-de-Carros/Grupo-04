import { HttpStatusCode } from 'axios';
import { addBrandToStoreRepo } from '../Repository/index.js';
import { findStoreById } from './findStoreById.js';
import { throwError } from '../../../utils/index.js';

export const addBrandToStore = async (id, updateBody) => {
  try {
    const existsStore = await findStoreById(id);

    if (!existsStore) {
      throwError('Loja não encontrada', HttpStatusCode.NotFound);
    }

    const updatedStore = await addBrandToStoreRepo(id, updateBody);

    return updatedStore;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
