import { HttpStatusCode } from 'axios';
import { findByIdFeatureRepo } from '../Repository/findByIdFeatureRepo.js';

export const findByIdFeatureService = async id => {
  try {
    const featureFromRepoById = await findByIdFeatureRepo(id);
    let name = [];
    let features = [];

    featureFromRepoById.cars.forEach(
      carInformations => (
        name.push(carInformations.car.name),
        features.push(carInformations.car.features)
      )
    );
    if (!featureFromRepoById) {
      throw {
        message: 'Feature não encontrado',
        status: HttpStatusCode.NotFound,
      };
    }
    return {
      name,
      features,
    };
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
