import { HttpStatusCode } from 'axios';
import { throwError } from '../../../utils/throwError.js';
import { findAllBrandsRepo } from '../Repository/findAllBrandsRepo.js';

export const findBrandService = async () => {
  const result = await findAllBrandsRepo();
  try {
    if (result.length === 0) {
      throw {
        message: 'Nenhuma marca localizada no sistema',
        status: HttpStatusCode.NotFound,
      };
    }
    return result;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
