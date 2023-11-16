import { HttpStatusCode } from 'axios';
import { findImageByIdRepo } from '../Repository/findImageByIdRepo.js';

export const findServiceById = async id => {
  try {
    const findedImageFromRepo = await findImageByIdRepo(id);

    if (!findedImageFromRepo) {
      throw {
        message: `Imagem de id ${id} não foi encontrada`,
        status: HttpStatusCode.BadRequest,
      };
    }

    return findedImageFromRepo;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
