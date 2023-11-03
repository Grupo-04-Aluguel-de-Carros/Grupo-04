import { HttpStatusCode } from 'axios';
import { findBrandByNameRepo } from '../Repository/findBrandByNameRepo.js';

export const findBrandByNameService = async name => {
  const verifyBrand = await findBrandByNameRepo(name);
  try {
    if (!verifyBrand) {
      throw {
        message: 'Marca inexistente no sistema !',
        status: HttpStatusCode.NotFound,
      };
    } else {
      return { message: 'Marca encontrada', name: verifyBrand.name };
    }
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
