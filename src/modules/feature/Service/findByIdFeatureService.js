import { HttpStatusCode } from 'axios';
import { findByIdFeatureRepo } from '../Repository/findByIdFeatureRepo.js';

export const findByIdFeatureService = async id => {
  try {
    const featureFromRepoById = await findByIdFeatureRepo(id);
    console.log(featureFromRepoById);
    if (!featureFromRepoById) {
      throw {
        message: 'Caracteristica não encontrada',
        status: HttpStatusCode.NotFound,
      };
    }
    let name = [];
    let features = [];
    featureFromRepoById.cars.forEach(
      carInformations => (
        name.push(carInformations.car.name),
        features.push(carInformations.car.features)
      )
    );
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
