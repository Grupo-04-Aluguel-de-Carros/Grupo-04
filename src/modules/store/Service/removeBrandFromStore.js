import { HttpStatusCode } from 'axios';
import { removeBrandFromStoreRepo } from '../Repository/index.js';
import { findStoreById } from './findStoreById.js';
import { findBrandById } from '../../brand/Service/findBrandById.js';

export const removeBrandFromStore = async (id, brands) => {
  try {
    const existStore = await findStoreById(id);
    if (!existStore) {
      throw {
        message: 'Não foi possivel encontrar a loja',
        status: HttpStatusCode.NotFound,
      };
    }

    let store = [];
    for (let brand of brands) {
      await findBrandById(brand);
      const updatedStoreData = await removeBrandFromStoreRepo(id, brand);
      store.push(updatedStoreData);
    }
    return store;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
