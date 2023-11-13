import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findAllFeatureRepo = async (recordsPerPage, currentPage) => {
  try {
    const [featureFromDb, total] = await db.$transaction([
      db.feature.findMany({
        skip: currentPage,
        take: recordsPerPage,
      }),
      db.feature.count(),
    ]);

    return { total, featureFromDb };
  } catch (error) {
    console.log('Error==>', error);
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
