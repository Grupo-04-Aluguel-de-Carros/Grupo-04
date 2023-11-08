import { HttpStatusCode } from 'axios';
import { findBrandByNameRepo } from '../Repository/findBrandByNameRepo.js';

export const findBrandByNameService = async name => {
  const verifyBrand = await findBrandByNameRepo(name);
  let brandsStore = [];
  for (let i = 0; i < verifyBrand.stores.length; i++) {
    const element = verifyBrand.stores[i].store;
    brandsStore.push(element);
  }
  try {
    if (!verifyBrand) {
      throw {
        message: 'Marca inexistente no sistema !',
        status: HttpStatusCode.NotFound,
      };
    } else {
      return {
        message: 'Marca encontrada',
        name: verifyBrand.name,
        brandsStore,
      };
    }
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
