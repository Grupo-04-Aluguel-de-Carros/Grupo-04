import { db } from '../../../config/db.js';
import { HttpStatusCode } from 'axios';

export const excludeBrandRepo = async id => {
  try {
    const deleteBrand = await db.brand.delete({
      where: {
        id: id,
      },
    });
    return deleteBrand;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
