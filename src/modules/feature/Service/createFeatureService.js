import { HttpStatusCode } from 'axios';
import { createFeatureRepo } from '../Repository/createFeatureRepo.js';
import { findFeatureByName } from '../Repository/findFeatureByName.js';

export const createFeatureService = async (featureObject, carId) => {
  try {
    const featureByNameFromRepo = await findFeatureByName(featureObject.name);

    if (featureByNameFromRepo) {
      throw {
        message: 'Caracteristica deste nível de carro já existente',
        status: HttpStatusCode.BadRequest,
      };
    }

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
