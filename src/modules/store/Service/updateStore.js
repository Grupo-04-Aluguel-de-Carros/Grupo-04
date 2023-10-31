import { HttpStatusCode } from 'axios';
import { findStoreByNameRepo, updateStoreRepo } from '../Repository/index.js';
import { findStoreById } from './findStoreById.js';

export const updateStore = async (id, updateBody) => {
  try {
    const existsStore = await findStoreById(id);
    if (!existsStore) {
      throw new Error(
        'Não foi possivel encontrar o usuário pelo id',
        HttpStatusCode.NotFound
      );
    }

    const existsStoreName = await findStoreByNameRepo(updateBody);
    if (existsStoreName) {
      throw new Error('Nome já cadastrado');
    }

    return await updateStoreRepo(id, updateBody);
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.BadRequest);
  }
};
