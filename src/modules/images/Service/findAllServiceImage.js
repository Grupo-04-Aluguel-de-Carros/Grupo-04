import { HttpStatusCode } from 'axios';
import { findAllRepoImage } from '../Repository/findAllRepoImage.js';

export const findAllServiceImage = async (listPerPage, offset) => {
  try {
    if (listPerPage > 5) {
      throw {
        message: 'Só podemos retornar 5 registros por página',
        status: HttpStatusCode.BadRequest,
      };
    }
    const resultFromRepo = await findAllRepoImage(listPerPage, offset);

    if (!resultFromRepo) {
      throw {
        message: 'Nenhuma Imagem encontrada',
        status: HttpStatusCode.BadRequest,
      };
    }

    const totalPages = Math.ceil(resultFromRepo.total / listPerPage);

    return { resultFromRepo, totalPages };
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
