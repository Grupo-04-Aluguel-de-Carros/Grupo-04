import { HttpStatusCode } from 'axios';
import { findAllRepoImage } from '../Repository/findAllRepoImage.js';

export const findAllServiceImage = async () => {
  try {
    const resultFromRepo = await findAllRepoImage();

    if (!resultFromRepo) {
      throw {
        message: 'Nenhuma Imagem encontrada',
        status: HttpStatusCode.BadRequest,
      };
    }

    return resultFromRepo;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
