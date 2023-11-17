import { HttpStatusCode } from 'axios';
import { findAllBrandsRepo } from '../Repository/findAllBrandsRepo.js';

export const findBrandService = async (listPerPage, offset,name) => {
  try {
    if (listPerPage > 5) {
      throw {
        message: 'Só podemos retornar 5 registros por página',
        status: HttpStatusCode.BadRequest,
      };
    }

    const result = await findAllBrandsRepo(
      listPerPage, offset, name
    );
    const totalPages = Math.ceil(result.total / listPerPage);

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
