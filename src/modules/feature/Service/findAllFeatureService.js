import { HttpStatusCode } from 'axios';
import { findAllFeatureRepo } from '../Repository/findAllFeatureRepo.js';

export const findAllFeatureService = async () => {
  try {
    const featureFromRepo = await findAllFeatureRepo();

    if (featureFromRepo.length === 0) {
      throw {
        message: 'Nenhuma caracteristica foi encontrada',
        status: HttpStatusCode.NotFound,
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
