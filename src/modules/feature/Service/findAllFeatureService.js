import { HttpStatusCode } from 'axios';
import { findAllFeatureRepo } from '../Repository/findAllFeatureRepo.js';

export const findAllFeatureService = async (take, skip) => {
  try {
    const currentPage = (skip - 1) * 5 || 0;
    const recordsPerPage = take || 5;
    if (recordsPerPage > 5) {
      throw {
        message: 'Só podemos retornar 5 registros por página',
        status: HttpStatusCode.BadRequest,
      };
    }
    const featureFromRepo = await findAllFeatureRepo(
      recordsPerPage,
      currentPage
    );
    const totalPages = Math.ceil(featureFromRepo.total / (recordsPerPage || 5));
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
