import { HttpStatusCode } from 'axios';
import { createFeatureRepo } from '../Repository/createFeatureRepo.js';

export const createFeatureService = async (
  massageSystem,
  shielding,
  sunRoof,
  gearLever,
  selfDriving,
  zeroToHundred,
  displacement,
  power,
  velocity,
  carId
) => {
  try {
    const featureFromRepo = await createFeatureRepo(
      massageSystem,
      shielding,
      sunRoof,
      gearLever,
      selfDriving,
      zeroToHundred,
      displacement,
      power,
      velocity,
      carId
    );
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
