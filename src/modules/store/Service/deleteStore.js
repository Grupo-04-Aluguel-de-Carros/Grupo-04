import { HttpStatusCode } from 'axios';
import { deleteStoreRepo } from '../Repository/index.js';
import { findStoreById } from './index.js';

export const deleteStore = async id => {
  try {
    const existsStore = await findStoreById(id);

    if (!existsStore) {
      throw {
        message: 'Usuário não encontrado',
        status: HttpStatusCode.NotFound,
      };
    }
    return await deleteStoreRepo(id);
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
