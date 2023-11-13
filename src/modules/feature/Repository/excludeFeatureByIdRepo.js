import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const excludeFeatureByIdRepo = async id => {
  try {
    const featureExcluded = await db.feature.delete({
      where: {
        id,
      },
    });
    return featureExcluded;
  } catch (error) {
    console.log('Error==>', error);
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
