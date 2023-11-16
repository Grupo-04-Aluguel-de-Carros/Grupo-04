import { HttpStatusCode } from 'axios';
import { findAllRepoImage } from '../Repository/findAllRepoImage.js';

export const findAllServiceImage = async (take, skip) => {
  try {
    if (take == undefined) {
      take = 5;
    }
    const recordsPerPage = take;
    const currentPage = (skip - 1) * take;
    if (recordsPerPage > 5) {
      throw {
        message: 'Só podemos retornar 5 registros por página',
        status: HttpStatusCode.BadRequest,
      };
    }
    const resultFromRepo = await findAllRepoImage(recordsPerPage, currentPage);

    if (!resultFromRepo) {
      throw {
        message: 'Nenhuma Imagem encontrada',
        status: HttpStatusCode.BadRequest,
      };
    }

    const totalPages = Math.ceil(resultFromRepo.total / recordsPerPage);

    return { resultFromRepo, totalPages };
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
