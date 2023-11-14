import { db } from '../../../config/db.js';
import { HttpStatusCode } from 'axios';

export const updateFeatureRepo = (id, updateBody) => {
  try {
    const featureUpdated = db.feature.update({
      where: {
        id,
      },
      data: updateBody,
    });
    return featureUpdated;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
