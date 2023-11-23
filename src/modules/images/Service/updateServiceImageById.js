import { HttpStatusCode } from 'axios';
import { findImageByIdRepo } from '../Repository/findImageByIdRepo.js';
import { updateImageRepo } from '../Repository/updateImageRepo.js';

export const updateServiceImageById = async (id, objectToUpdate) => {
  try {
    const dataFindedFromRepo = await findImageByIdRepo(id);

    if (!dataFindedFromRepo) {
      throw {
        message: `Imagem de id ${id} não foi encontrada`,
        status: HttpStatusCode.BadRequest,
      };
    }

    const dataUpdatedFromRepo = await updateImageRepo(id, objectToUpdate);

    return dataUpdatedFromRepo;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
