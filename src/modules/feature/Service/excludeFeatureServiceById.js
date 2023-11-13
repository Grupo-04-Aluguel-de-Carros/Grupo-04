import { findByIdFeatureRepo } from '../Repository/findByIdFeatureRepo.js';
import { excludeFeatureByIdRepo } from '../Repository/excludeFeatureByIdRepo.js';
import { HttpStatusCode } from 'axios';

export const excludeFeatureServiceById = async id => {
  try {
    // let featureId;
    const resultFromFindById = await findByIdFeatureRepo(id);
    // for (let i = 0; i < resultFromFindById.cars.length; i++) {
    //   featureId = resultFromFindById.cars[i].car.features[i].feature.id;
    // }
    // const matchsIds = id.match(featureId);
    if (!resultFromFindById) {
      throw {
        message: 'Feature não existe ou já foi excluida',
        status: HttpStatusCode.NotFound,
      };
    }
    const resultFromExcludeById = await excludeFeatureByIdRepo(id);
    console.log('resultFromExcludeById ', resultFromExcludeById);
    return resultFromExcludeById;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
