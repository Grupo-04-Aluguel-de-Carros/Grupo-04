import { HttpStatusCode } from 'axios';
import { createStoreRepo, findStoreByNameRepo } from '../Repository/index.js';

export const createStore = async name => {
  try {
    const existsStore = await findStoreByNameRepo(name);
    if (existsStore) {
      throw new Error('Nome já cadastrado');
    }
    return await createStoreRepo(name);
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.BadRequest);
  }
};
