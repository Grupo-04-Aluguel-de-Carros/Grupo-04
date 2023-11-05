import { HttpStatusCode } from 'axios';
import { findAllBrandsRepo } from '../Repository/findAllBrandsRepo.js';

export const findBrandService = async (take, skip) => {
  const pageFromUser = (skip - 1) * take;
  if (take > 3) {
    throw {
      message: 'Só podemos retornar 3 registros por página',
      status: HttpStatusCode.BadRequest,
    };
  }
  const result = await findAllBrandsRepo(take || 3, pageFromUser || 0);
  const totalPages = Math.ceil(result.total / (take || 3));

  try {
    if (result.total === 0) {
      throw {
        message: 'Nenhuma marca localizada no sistema',
        status: HttpStatusCode.NotFound,
      };
    }
    return { result, totalPages };
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
