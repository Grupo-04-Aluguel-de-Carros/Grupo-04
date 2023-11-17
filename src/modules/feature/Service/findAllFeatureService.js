import { HttpStatusCode } from 'axios';
import { findAllFeatureRepo } from '../Repository/findAllFeatureRepo.js';

export const findAllFeatureService = async (listPerPage, offset) => {
  try {
    if (listPerPage > 5) {
      throw {
        message: 'Só podemos retornar 5 registros por página',
        status: HttpStatusCode.BadRequest,
      };
    }
    const featureFromRepo = await findAllFeatureRepo(listPerPage, offset);
    const totalPages = Math.ceil(featureFromRepo.total / listPerPage);
    if (featureFromRepo.length === 0) {
      throw {
        message: 'Nenhuma caracteristica foi encontrada',
        status: HttpStatusCode.NotFound,
      };
    }
    return { totalPages, featureFromRepo };
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
