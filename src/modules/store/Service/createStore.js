import { HttpStatusCode } from 'axios';
import { createStoreRepo, findStoreByNameRepo } from '../Repository/index.js';
import { findBrandById } from '../../brand/Service/findBrandById.js';
import { throwError } from '../../../utils/throwError.js';

export const createStore = async ({ name, brands }) => {
  try {
    const existsStore = await findStoreByNameRepo(name);
    if (existsStore) {
      throw {
        message: 'Nome já cadastrado',
        status: HttpStatusCode.BadRequest,
      };
    }

    if (brands) {
      for (let brand of brands) {
        const brandData = await findBrandById(brand);
        if (!brandData) {
          throwError('Marca não encontrada', HttpStatusCode.NotFound);
        }
      }
    }
    return await createStoreRepo({ name, brands });
  } catch (error) {
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
