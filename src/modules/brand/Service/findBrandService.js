import { HttpStatusCode } from 'axios';
import { findAllBrandsRepo } from '../Repository/findAllBrandsRepo.js';

export const findBrandService = async (recordPerPage, page, name) => {
  try {
    if (recordPerPage == undefined) {
      recordPerPage = 5;
    }
    if (recordPerPage > 5) {
      throw {
        message: 'Só podemos retornar 5 registros por página',
        status: HttpStatusCode.BadRequest,
      };
    }
    const pageFromUser = (page - 1) * recordPerPage;

    const result = await findAllBrandsRepo(
      recordPerPage,
      pageFromUser || 0,
      name
    );
    const totalPages = Math.ceil(result.total / (recordPerPage || 3));

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
