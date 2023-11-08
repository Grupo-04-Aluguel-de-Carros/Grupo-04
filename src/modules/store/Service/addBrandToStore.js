import { HttpStatusCode } from 'axios';
import { addBrandToStoreRepo } from '../Repository/index.js';
import { findStoreById } from './findStoreById.js';
import { throwError } from '../../../utils/index.js';
import { findBrandById } from '../../brand/Service/findBrandById.js';

export const addBrandToStore = async (id, brands) => {
  try {
    const existsStore = await findStoreById(id);

    if (!existsStore) {
      throwError('Loja não encontrada', HttpStatusCode.NotFound);
    }
    let updatedStore = [];
    for (let brand of brands) {
      await findBrandById(brand);
      const updatedStoreData = await addBrandToStoreRepo(id, brand);
      updatedStore.push(updatedStoreData);
    }

    return updatedStore;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
