import { db } from '../../../config/db.js';
import { HttpStatusCode } from 'axios';

export const findFeatureByName = async name => {
  try {
    const findedFeatureName = await db.feature.findFirst({
      where: {
        name,
      },
    });
    return findedFeatureName;
  } catch (error) {
    throw {
      message: error.message,
      status: HttpStatusCode.InternalServerError || error.status,
    };
  }
};
