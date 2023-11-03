import { HttpStatusCode } from 'axios';
import { createBrandRepo } from '../Repository/createBrandRepo.js';
import { findBrandByNameRepo } from '../Repository/findBrandByNameRepo.js';

export const createBrandService = async ({ name }) => {
  try {
    const verifyBrand = await findBrandByNameRepo(name);
    if (verifyBrand) {
      throw {
        message: 'Marca já existente no sistema !',
        status: HttpStatusCode.BadRequest,
      };
    } else {
      const brandCreated = await createBrandRepo(name);
      return brandCreated;
    }
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
