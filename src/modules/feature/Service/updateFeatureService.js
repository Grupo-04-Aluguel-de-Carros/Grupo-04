import { HttpStatusCode } from 'axios';
import { findByIdFeatureRepo } from '../Repository/findByIdFeatureRepo.js';
import { updateFeatureRepo } from '../Repository/updateFeatureRepo.js';

export const updateFeatureService = async (id, updateFeature) => {
  try {
    const resultFromFindFromId = await findByIdFeatureRepo(id);
    if (!resultFromFindFromId) {
      throw {
        message: 'Não foi possível encontrar o id',
        status: HttpStatusCode.NotFound,
      };
    }

    const resultFromUpdateFeature = await updateFeatureRepo(id, updateFeature);
    return resultFromUpdateFeature;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
