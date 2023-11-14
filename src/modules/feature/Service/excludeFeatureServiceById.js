import { findByIdFeatureRepo } from '../Repository/findByIdFeatureRepo.js';
import { excludeFeatureByIdRepo } from '../Repository/excludeFeatureByIdRepo.js';
import { HttpStatusCode } from 'axios';

export const excludeFeatureServiceById = async id => {
  try {
    const resultFromFindById = await findByIdFeatureRepo(id);
    if (!resultFromFindById) {
      throw {
        message: 'Feature não existe ou já foi excluida',
        status: HttpStatusCode.NotFound,
      };
    }
    const resultFromExcludeById = await excludeFeatureByIdRepo(id);
    return resultFromExcludeById;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
