import { HttpStatusCode } from 'axios';
import { findStoreByNameRepo, updateStoreRepo } from '../Repository/index.js';
import { findStoreById } from './findStoreById.js';

export const updateStore = async (id, updateBody) => {
  try {
    const existsStore = await findStoreById(id);
    if (!existsStore) {
      throw {
        message: 'Não foi possivel encontrar o usuário pelo id',
        status: HttpStatusCode.NotFound,
      };
    }

    const existsStoreName = await findStoreByNameRepo(updateBody);
    if (existsStoreName) {
      throw {
        message: 'Nome já cadastrado',
        status: HttpStatusCode.BadRequest,
      };
    }

    return await updateStoreRepo(id, updateBody);
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
