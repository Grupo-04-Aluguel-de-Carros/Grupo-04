import { HttpStatusCode } from 'axios';
import { excludeImageRepo } from '../Repository/excludeImageRepo.js';
import { findImageByIdRepo } from '../Repository/findImageByIdRepo.js';

export const excludeServiceImageById = async id => {
  try {
    const findedImageById = await findImageByIdRepo(id);

    if (!findedImageById) {
      throw {
        message: `Imagem de id ${id} não encontrada`,
        status: HttpStatusCode.BadRequest,
      };
    }

    const imageExcluded = await excludeImageRepo(id);

    return imageExcluded;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
