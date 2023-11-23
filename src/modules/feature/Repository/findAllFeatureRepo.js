import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findAllFeatureRepo = async (listPerPage, offset) => {
  try {
    const [featureFromDb, total] = await db.$transaction([
      db.feature.findMany({
        skip: offset,
        take: listPerPage,
      }),
      db.feature.count(),
    ]);

    return { total, featureFromDb };
  } catch (error) {
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
