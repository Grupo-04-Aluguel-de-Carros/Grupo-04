import { db } from '../../../config/db.js';
import { HttpStatusCode } from 'axios';

export const excludeImageRepo = async id => {
  try {
    const imageExcluded = await db.images.delete({
      where: {
        id,
      },
    });
    return imageExcluded;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
