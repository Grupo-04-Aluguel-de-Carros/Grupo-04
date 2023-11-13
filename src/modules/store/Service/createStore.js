import { HttpStatusCode } from 'axios';
import { createStoreRepo, findStoreByNameRepo } from '../Repository/index.js';

export const createStore = async ({ name }) => {
  try {
    const existsStore = await findStoreByNameRepo(name);
    if (existsStore) {
      throw {
        message: 'Nome já cadastrado',
        status: HttpStatusCode.BadRequest,
      };
    }

    return await createStoreRepo({ name });
  } catch (error) {
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
