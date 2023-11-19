import { createImageRepo } from '../Repository/createImageRepo.js';
import { findCarByIdRepo } from '../../car/Repository/findCarByIdRepo.js';
import { HttpStatusCode } from 'axios';

export const createServiceImage = async imageObject => {
  try {
    const carId = await findCarByIdRepo(imageObject.carId)

    if (!carId) {
      throw{
        message: `Id do carro ${imageObject.carId} não encontrado ou não existe`,
        status: HttpStatusCode.BadRequest
      }
    }

    const createdImageFromRepo = await createImageRepo(imageObject);

    return createdImageFromRepo;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
