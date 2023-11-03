import { HttpStatusCode } from 'axios';
import { excludeBrandRepo } from '../Repository/excludeBrandRepo.js';
import { findBrandByIdRepo } from '../Repository/findBrandByIdRepo.js';

export const excludeBrandService = async id => {
  const verifyBrandById = await findBrandByIdRepo(id);
  try {
    if (!verifyBrandById) {
      throw {
        message: `Marca de id ${id} não existe ou já foi excluido`,
        status: HttpStatusCode.NotFound,
      };
    }

    const resultFromRepository = await excludeBrandRepo(id);
    return {
      message: 'Excluindo marca...',
      name: resultFromRepository,
    };
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
