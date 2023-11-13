import { HttpStatusCode } from 'axios';
import { createFeatureRepo } from '../Repository/createFeatureRepo.js';

export const createFeatureService = async (featureObject, carId) => {
  try {
    const featureFromRepo = await createFeatureRepo(featureObject, carId);
    if (!featureFromRepo) {
      throw {
        message: 'Não foi possível criar a característica',
        status: HttpStatusCode.BadRequest,
      };
    }
    return featureFromRepo;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
