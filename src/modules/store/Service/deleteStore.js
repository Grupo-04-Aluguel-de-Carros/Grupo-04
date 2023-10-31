import { HttpStatusCode } from 'axios';
import { deleteStoreRepo } from '../Repository/index.js';
import { findStoreById } from './index.js';

export const deleteStore = async id => {
  try {
    const existsStore = await findStoreById(id);

    if (!existsStore) {
      throw new Error('Usuário não encontrado', HttpStatusCode.NotFound);
    }
    return await deleteStoreRepo(id);
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.BadRequest);
  }
};
